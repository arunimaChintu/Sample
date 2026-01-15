using my.bookshop as my from '../db/Schema';


service CatalogService {
    entity Books as projection on my.Books;
    entity Test as projection on my.Books;
    entity emp as projection on my.EmpDetails
}
