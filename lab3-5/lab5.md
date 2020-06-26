# Lab5
Filtering, editing products and roles.

## Description
This lab is impoved version of [lab4](https://github.com/xenoteo/Web/blob/master/lab3-5/lab4.md).  
In this version of the project were added:  
- Filtering of the products; by name, price and the type of the product (bicycle or scooter)
- Editing of the product
- Roles of the users
  
### Roles
From now all users are being added to the database with their roles. There are two possible roles for users: admin or editor. Reader is a user who not signed up or not logined.
- Admin can edit or delete any product and add new product.
- Editor or signed up and logined user can edit or remove only his/her own products (the products which were added by this user). Editor can add new products. New signed up user is always editor by default. 
- Reader or not logined user cannot edit, delete or add products. This user can only add products to the cart.
  
### New models description
- [Filter](https://github.com/xenoteo/Web/blob/master/lab3-5/src/app/models/filter/filter.ts) is used for storing the filtering data.
- [User](https://github.com/xenoteo/Web/blob/master/lab3-5/src/app/models/user/user.ts) is a model of user.

### New components descriprion
- [filter](https://github.com/xenoteo/Web/tree/master/lab3-5/src/app/components/filter) is responsible for filter.
- [edit-product](https://github.com/xenoteo/Web/tree/master/lab3-5/src/app/components/edit-product) is responsible for editing a product.

### New services description
- [UserService](https://github.com/xenoteo/Web/tree/master/lab3-5/src/app/services/UserService) helps to check whether a user is admin.
Other services were slightly modified.

## Screenshots
### Reader view
<a href="https://imgur.com/2JTZtHc"><img src="https://i.imgur.com/2JTZtHc.png" title="source: imgur.com" /></a>
### After filtering
<a href="https://imgur.com/oqxHPq2"><img src="https://i.imgur.com/oqxHPq2.png" title="source: imgur.com" /></a>
### Admin view
<a href="https://imgur.com/mBmTVJq"><img src="https://i.imgur.com/mBmTVJq.png" title="source: imgur.com" /></a>
### Editing the product
<a href="https://imgur.com/vDeyItG"><img src="https://i.imgur.com/vDeyItG.png" title="source: imgur.com" /></a>
### Editor view
<a href="https://imgur.com/q7FpuZN"><img src="https://i.imgur.com/q7FpuZN.png" title="source: imgur.com" /></a>

