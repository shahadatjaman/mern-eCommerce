

## Table of contents

- [Introduction](#introduction)
- [Key Features](#key-features)
- [Technologies used](#technologies-used)
  - [Client](#client)
  - [Server](#server)
  - [Database](#database)
- [Configuration and Setup](#configuration-and-setup)
- [Author](#author)



![Profile](https://res.cloudinary.com/dza2t1htw/image/upload/v1677583302/home_dekwir.jpg)
![Profile](https://res.cloudinary.com/dza2t1htw/image/upload/v1677583583/details_g5tbrp.jpg)

## Introduction
The goal of this project is to develop a multi-vendor eCommerce(RBAC) platform that allows multiple sellers to create their own online stores. The platform will be built using modern web technologies.

### Component Tree : [@Download](https://drive.google.com/file/d/11bORKDQ_-81E3G1Zrk8M7Nu--G3zzfR0/view?usp=share_link)

### Vendor Features :

- Users can create two account types: customer and vendor.
- A vendor can create products with various attributes such as variable products, product categories, sizes/colors, and discounts etc.
- Vendors have the ability to update various attributes of their products, such as pricing, descriptions, images, and inventory levels.
- Vendors have the ability to update or delete product prices by either incrementing or decrementing the price, and they can also mark products for deletion.
- Vendors have the ability to update their profile information, including their avatar, name, email address, and password. They also have the option to delete their account if needed.

### Customer Features :

- Users have the ability to add items to their cart, add products to their wish list, and adjust the quantity of items by incrementing or decrementing the quantity.
- Users can view the details of a product, select the desired variations such as color or size, and create an order based on their choices.
- After creating an order, the customer can add their delivery address and choose cash on delivery as the payment method. Once the order is confirmed, the customer will receive a PDF containing details of the ordered products.
- Customers have the ability to update their profile information, including their avatar, name, email address, and password. They also have the option to delete their account if needed.
- Vendors have the ability to update their profile information, including their avatar, name, email address, and password. They also have the option to delete their account if needed.

### Authentication features  :

- If a user forgets their password, they can request a password reset link via email, and use that link to create a new password.
- Access tokens and refresh tokens are implemented in the authentication process.
- After creating an order, the customer can add their delivery address and choose cash on delivery as the payment method. Once the order is confirmed, the customer will receive a PDF containing details of the ordered products.
- Customers have the ability to update their profile information, including their avatar, name, email address, and password. They also have the option to delete their account if needed.
- Vendors have the ability to update their profile information, including their avatar, name, email address, and password. They also have the option to delete their account if needed.


## Front-end Technologies :

This project was created using the following technologies.

#### Client

- React JS
- Redux toolkit
- React-router-dom 6(To handle routing)
- Axios (for making api calls)
- Styled Commponents
- Material UI

#### Server

- NodeJS
- ExpressJS
- Mongoose
- JWT (For authentication)
- bcryptjs (for data encryption)
- Nodemailer
- multer
- Cookie parser
- Passport

#### Database

MongoDB (MongoDB Atlas)

## Configuration and Setup

In order to run this project locally, simply fork and clone the repository or download as zip and unzip on your machine.

- Open the project in your prefered code editor.
- Go to terminal -> New terminal (If you are using VS code)
- Split your terminal into two (run the client on one terminal and the server on the other terminal)

In the first terminal

- cd client and create a .env file in the root of your client directory.
- Supply the following credentials

```
REACT_APP_SERVER_URL =

```

```
$ cd client
$ npm install (to install client-side dependencies)
$ npm start (to start the client)
```




Please follow [This tutorial](https://dev.to/dalalrohit/how-to-connect-to-mongodb-atlas-using-node-js-k9i) to create your mongoDB connection url, which you'll use as your DB_URL

```
$ cd server
$ npm install (to install server-side dependencies)
& npm start (to start the server)
```


## Comment

I intend to keep adding more features to this application, so if you like it, please give it a star, that will encourage me to
to keep improving the project.

## Author

- Github: [@shahadat](https://github.com/abuhuraira24)
- Linkedin: [@shahadat](https://www.linkedin.com/in/shahadat-jaman-1027b7263/)
- Email: [@shahadat](mailto:shahadatjaman23@gmail.com)

