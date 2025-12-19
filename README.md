Run command
npx expo start -c

Authentication Flow
User inputs email and password.
Both are checked and if they Match then we return access token which is later used for api calls and stored in asynch storage.
Use - (email : dummy@gmail.com , password = 123456).

Products Page
There is one All Products Page.
User can set favourite items and they are stored in asynch storage. Improvement-> to store favourite user products in user table in db to persist this info in later sessions.
User can edit any product. Currently patch required a check and all fields must be present. Improvement -> implement checks separately for each field
User can Create product using ProductsForm. Improvement-> store user creds and store createdBy info in DB for each product.

Limitations:
Better UI checks on fields.
Break code into reusable functions.
Refactore code again.
Video animations + better UX.
Optimize space.





