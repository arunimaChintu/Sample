
"""
This script is designed to process a question and chat history using the HANA AI.
"""
import os
os.environ['SKIP_AUTHORIZATION'] = "true"
os.environ["TQDM_DISABLE"] = "1" 

import sys
import json
from datetime import datetime, date

from pandas import Timestamp

from numpy import int64
 
from gen_ai_hub.proxy.langchain import init_llm
from hana_ml import dataframe
import pandas as pd
from hana_ai.agents.hanaml_agent_with_memory import stateless_call
from hana_ai.tools.toolkit import HANAMLToolkit
import bas_client
import gen_ai_hub
from gen_ai_hub.proxy.langchain import init_llm
from gen_ai_hub.proxy.core.proxy_clients import get_proxy_client
from gen_ai_hub.proxy.langchain.openai import ChatOpenAI
#set env variable


class _CustomEncoder(json.JSONEncoder):
    """
    This class is used to encode the model attributes into JSON string.
    """
    def default(self, obj): #pylint: disable=arguments-renamed
        if isinstance(obj, Timestamp):
            # Convert Timestamp to ISO string
            return obj.isoformat()
        elif isinstance(obj, (datetime, date)):
            # Convert datetime or date to ISO string
            return obj.isoformat()
        elif isinstance(obj, (int64, int)):
            # Convert numpy int64 or Python int to Python int
            return int(obj)
        # Let other types use the default handler
        return super().default(obj)

# pylint: disable=line-too-long, broad-exception-caught

proxy_client = get_proxy_client(proxy_version="gen-ai-bas-proxy")

llm = ChatOpenAI(proxy_model_name="gpt-4.1", proxy_client=proxy_client, max_retries=10)
tools = {}

def process_strings(question: str, chat_history: list[str]) -> str:
    """
    Process the input question and chat history using the HANA AI.
    """
    return stateless_call(
        question=question,
        chat_history=chat_history,
        tools=tools,
        llm=llm,
        verbose=False,
        return_intermediate_steps=True,
    )

if __name__ == "__main__":
    try:
        # Read input
        raw_input = sys.stdin.read().strip()
        input_data = json.loads(raw_input)

        # Validate input
        if 'chat_history' not in input_data:
            raise ValueError("Missing 'chat_history' key")
        # validate input
        if 'question' not in input_data:
            raise ValueError("Missing 'question' key")
        if not isinstance(input_data['question'], str):
            raise ValueError("'question' must be a string")
        if not isinstance(input_data['chat_history'], list):
            raise ValueError("'chat_history' must be a list")
        if not all(isinstance(item, str) for item in input_data['chat_history']):
            raise ValueError("All items in 'chat_history' must be strings")

        # Check for address, port, user, password in input_data
        missing_keys = []
        for key in ['address', 'port', 'user', 'password']:
            if key not in input_data:
                missing_keys.append(key)
        if missing_keys:
            raise ValueError(f"Missing key(s) in input: {', '.join(missing_keys)}")
        connection_context = dataframe.ConnectionContext(address=input_data['address'], port=input_data['port'], user=input_data['user'], password=input_data['password'])
        tools = HANAMLToolkit(connection_context, used_tools='all', return_direct={"ts_dataset_report": False}).set_bas().get_tools()
        # Process and output
        result = process_strings(input_data['question'], input_data['chat_history'])
        print(json.dumps({"result": result}, ensure_ascii=False, cls=_CustomEncoder))

    except Exception as e:
        print(json.dumps({"error": str(e)}, ensure_ascii=False, cls=_CustomEncoder))
    finally:
        sys.stdout.flush()  # Ensure output is sent
