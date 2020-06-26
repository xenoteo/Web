# Lab3
Angular, communication between components and services.

## Description
This page is developed version of the page selling bicycles in [lab2](https://github.com/xenofiodor/Web/tree/master/lab2).  
Here scooters were added, and general structure of the project is developed.

### Components description
- [product](https://github.com/xenofiodor/Web/tree/master/lab3/src/app/components/product) - manages the whole product list and load the page content.
- [product-info](https://github.com/xenofiodor/Web/tree/master/lab3/src/app/components/product-info) - displays imformation about single object.
- [new-product](https://github.com/xenofiodor/Web/tree/master/lab3/src/app/components/new-product) - responsible for adding new products to the product list.
- [cart](https://github.com/xenofiodor/Web/tree/master/lab3/src/app/components/cart) - responsible for cart managing.

### Models description
- [product](https://github.com/xenofiodor/Web/tree/master/lab3/src/app/models/product) - just product model.
- [bicycle](https://github.com/xenofiodor/Web/tree/master/lab3/src/app/models/bicycle) - bicycle model extending product.
- [scooter](https://github.com/xenofiodor/Web/tree/master/lab3/src/app/models/scooter) - scooter model extending product.
- [item](https://github.com/xenofiodor/Web/tree/master/lab3/src/app/models/item) - one cart item - contains information about the product added to the cart and int quantity.
- [product-list](https://github.com/xenofiodor/Web/blob/master/lab3/src/app/models/product-list.ts) -just list of products samples.

### Services description
- [ProductService](https://github.com/xenofiodor/Web/tree/master/lab3/src/app/services/ProductService) - manages product list up to date.
- [CartService](https://github.com/xenofiodor/Web/tree/master/lab3/src/app/services/CartService) - manages cart content up to date.

## Screenshots
<a href="https://imgur.com/eHxkzUa"><img src="https://i.imgur.com/eHxkzUa.png" title="source: imgur.com" /></a>
