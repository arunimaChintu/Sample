sap.ui.define([
    "sap/ui/model/json/JSONModel",
    "sap/ui/Device"
], 
function (JSONModel, Device) {
    "use strict";

    return {
        /**
         * Provides runtime information for the device the UI5 app is running on as a JSONModel.
         * @returns {sap.ui.model.json.JSONModel} The device model.
         */
        createDeviceModel: function () {
            var oModel = new JSONModel(Device);
            oModel.setDefaultBindingMode("OneWay");
            return oModel;
        },
        createEmployeeModel: function () {
            var oData = {
                employees: [
                    {
                        id: "E001",
                        name: "Anita Sharma",
                        department: "HR",
                        role: "Recruiter",
                        location: "Chennai",
                        status: "Active",
                        joinDate: "2022-03-15"
                    },
                    {
                        id: "E002",
                        name: "Karthik Nair",
                        department: "Finance",
                        role: "Accountant",
                        location: "Bengaluru",
                        status: "Active",
                        joinDate: "2021-11-08"
                    },
                    {
                        id: "E003",
                        name: "Divya Menon",
                        department: "IT",
                        role: "UI5 Developer",
                        location: "Hyderabad",
                        status: "Inactive",
                        joinDate: "2020-06-21"
                    },
                    {
                        id: "E004",
                        name: "Rohit Verma",
                        department: "Operations",
                        role: "Team Lead",
                        location: "Mumbai",
                        status: "Active",
                        joinDate: "2019-09-30"
                    }
                ],
                personalData: {
                    E001: [
                        {
                            lineId: "E001-1",
                            type: "Address",
                            value: "12 Beach Road, Chennai",
                            startDate: "2023-01-01",
                            active: true
                        },
                        {
                            lineId: "E001-2",
                            type: "Emergency Contact",
                            value: "Rahul Sharma - 9876543210",
                            startDate: "2022-05-12",
                            active: true
                        }
                    ],
                    E002: [
                        {
                            lineId: "E002-1",
                            type: "Address",
                            value: "44 MG Road, Bengaluru",
                            startDate: "2021-12-01",
                            active: true
                        }
                    ],
                    E003: [
                        {
                            lineId: "E003-1",
                            type: "Address",
                            value: "90 Jubilee Hills, Hyderabad",
                            startDate: "2020-07-01",
                            active: false
                        }
                    ],
                    E004: [
                        {
                            lineId: "E004-1",
                            type: "Address",
                            value: "18 Marine Drive, Mumbai",
                            startDate: "2019-10-15",
                            active: true
                        }
                    ]
                },
                departments: [
                    "All",
                    "HR",
                    "Finance",
                    "IT",
                    "Operations"
                ],
                statuses: [
                    "All",
                    "Active",
                    "Inactive"
                ],
                personalTypes: [
                    "Address",
                    "Emergency Contact",
                    "Bank Details",
                    "Tax ID",
                    "Passport"
                ]
            };
            return new JSONModel(oData);
        }
    
    };

});