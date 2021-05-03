## JS_MongoDb_SignUp_LogIn

#### Project Summary:
Using Node.js and MongoDb I have developed this project with limited functionality. This project consists of three static pages:__1. Home Page  2. Login Page  3. Signup page__.
In this project, I have mainly focused on **Database connection**. With the help of Signup page I have taken user information and stored all the data into my database in MongoDb.
On Login Page I have verified user Email Id and Password with database and made log in accordingly.

The following technologies are covered during these development:
1. **HTML**
2. **CSS**
3. **Bootstrap**
4. **Javascript**
5. **Node.js**
6. **Express.js**
7. **MongoDb**

#### Home Page :
This is the landing page of the project. At the navigation bar, have two options Log In and Sign Up, to navigate towards Log In page and Sign Up page respectively.

![Screenshot (13)](https://user-images.githubusercontent.com/72350924/116924526-9bcd3480-ac75-11eb-9ff8-aba94c2d4b01.png)

**_I have used the following code to host the website and to make the home page as landing page:_**

![Screenshot (16)](https://user-images.githubusercontent.com/72350924/116927395-409d4100-ac79-11eb-8b6b-7f427cdcd604.png)
![Screenshot (18)](https://user-images.githubusercontent.com/72350924/116927419-46932200-ac79-11eb-8254-db86d6238fde.png)

#### Signup Page: 
User will be redirected to Sign Up page after clicking on Sign Up option from home page. Here I have created a form for taking some information from a user. Also I have done validation with Javascript for each field.

![Screenshot (10)](https://user-images.githubusercontent.com/72350924/116934877-24060680-ac83-11eb-87ad-9e1701b74936.png)

_When user will click Submit button , each field validation will be checked if all validation is successful , form will be submitted and all user information will be stored at database , if validation fail form will not be submitted and will give error message what kind of validation is failing._

![Screenshot (25)](https://user-images.githubusercontent.com/72350924/116938001-ba3c2b80-ac87-11eb-98f1-c6bdc3110625.png)

![Screenshot (26)](https://user-images.githubusercontent.com/72350924/116938024-c0320c80-ac87-11eb-8899-e3fd601cdc6b.png)

**I have used the following codes to establish MongoDb connection with our project**

##### _Code for MongoDb Connection : 

![Screenshot (23)](https://user-images.githubusercontent.com/72350924/116934912-32ecb900-ac83-11eb-8c12-620705d7736c.png)

##### _Code for creating Mongoose schema and model :

![Screenshot (22)](https://user-images.githubusercontent.com/72350924/116934960-4566f280-ac83-11eb-81e7-277a685d4d76.png)

##### _Code for inserting data into database and Password hashing :

![Screenshot (24)](https://user-images.githubusercontent.com/72350924/116934970-4bf56a00-ac83-11eb-94cd-f60b46ebc016.png)

#### Login Page :
User will be redirected to Log In page after clicking on Log In option from navigation bar. 

![Screenshot (12)](https://user-images.githubusercontent.com/72350924/116940253-50be1c00-ac8b-11eb-8a40-8a4c153a9214.png)

##### _Following code for find user given email id in database and match user given password with database stored hashed password

![Screenshot (27)](https://user-images.githubusercontent.com/72350924/116940275-5582d000-ac8b-11eb-9e82-3ec180c48906.png)

