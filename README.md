# CC
This is the documentation for this API

## User <br>
This section is used to manipulate user data such as adding new user, get user, get all user, update user, and delete user. There are 6 routes that can be used such as:
### 1. '/api/user' (POST)<br>
This route is used to add new user to the database. It accepts 4 values email, pass, name, and phone. If those data are successfully addded, the api will send a message that read Data successfully added, if there is an error it will return a status of 500 with the error message.
### 2. '/api/user' (GET)<br>
This route is used to get all the available users in the database. It will return a JSON array filled with all users data. Each user will have 4 data that is name, pass, email, and phone. If there's no data found in the database (Database empty) the api will return a status of 500 with a message Not available. If there's an success api will return a status of 200 with message Data successfully obtained.

### 3. '/api/user/:id' (GET)<br>
This route is used to get a single user data using it's id as a parameter. It will return a JSON data of the users data. Each user will have 4 data that is name, pass, email, and phone. If there's no user with that id the api will send a status of 404 with the message User with the given User not found. If there's an error while running this route, it will send a status of 500 with the error message Not available. And if success api will send a status of 200 with the message User successfully obtained.

### 4. '/api/user/:id' (PUT)<br>
This route is used to change user data using it's id as a parameter. You can change all the user's data or just one of it's data. You will need to send a body with either email, pass, name, and phone. If the user's succesfully updated, the api will send a message User updated successfully. If there's an error while running this route, it will send a status of 500 with the error message Not available.

### 5. '/api/user/:id' (DELETE)<br>
This route is used to delete user data using it's id as a parameter. If user succesfully deleted, it will send a message User deleted successfully. If there's an error while running this route, it will send a status of 500 with the error message Not available.

### 6. '/api/user/login' (POST)<br>
This section is used to login for user. You should post the email and pass to JSON body. And then firebase Auth can be check email and pass.

## Book <br>
This section is used to manipulate book data such as adding new book, get book, get all book, and update book. There are 4 routes that can be used such as:
### 1. '/api/book' (POST)<br>
This route is used to add new book to the database. It accepts 6 values userId, image, name, category, weight, and price. If those data are successfully addded, the api will send a message that read Book successfully added, if there is an error it will return a status of 500 with the error message Not available.
### 2. '/api/book' (GET)<br>
This route is used to get all the available book in the database. It will return a JSON array filled with all book data. Each user will have 6 data that is  userId, image, name, category, weight, and price. If there's no data found in the database (Database empty) the api will return a status of 500 with a message Not available. If there's an success api will return a status of 200 with message Book successfully obtained.
### 3. '/api/book/:id' (GET)<br>
This route is used to get a single book data using it's id as a parameter. It will return a JSON data of the users data. Each user will have 6 data that is  userId, image, name, category, weight, and price. If there's no user with that id the api will send a status of 404 with the message User with the given User not found. If there's an error while running this route, it will send a status of 500 with the error message Not available. And if success api will send a status of 200 with the message Book successfully obtained.
### 4. '/api/book/:id' (PUT)<br>
This route is used to change book data using it's id as a parameter. You can change all the book's data or just one of it's data. You will need to send a body with either userId, image, name, category, weight, and price. If the user's succesfully updated, the api will send a message Book updated successfully. If there's an error while running this route, it will send a status of 500 with the error message Book cannot update.

## Shop <br>
This section is used to manipulate shop data such as adding new shop, get book, and get all book. There are 3 routes that can be used such as:
### 1. '/api/shop' (POST)<br>
This route is used to add new book to the database. It accepts 4 values name, description, longitude, and latitude. If those data are successfully addded, the api will send a message that read Shop successfully added, if there is an error it will return a status of 500 with the error message Not available.
### 2. '/api/shop' (GET)<br>
This route is used to get all the available shop in the database. It will return a JSON array filled with all book data. Each user will have 4 values name, description, longitude, and latitude. If there's no data found in the database (Database empty) the api will return a status of 500 with a message Not available. If there's an success api will return a status of 200 with message Data successfully obtained.
### 3. '/api/shop/:id' (GET)<br>
This route is used to get a single shop data using it's id as a parameter. It will return a JSON data of the users data. Each user will have 4 values name, description, longitude, and latitude. If there's no shop with that id the api will send a status of 404 with the message User with the given User not found. If there's an error while running this route, it will send a status of 500 with the error message Not available. And if success api will send a status of 200 with the message User successfully obtained.


