const Xhr=new XMLHttpRequest();//creates a new HTTP message to send the backend
//('parameter1=what type of http eg types of request GET POST PUT DELETE
// GET is get some information fromm backend','parameter2= where to send this HTTP message
// eg url(an address but for the internet or helps us locate another computer on the internet)')
//eventlistener(para1=to wait for,para2=the function that run)
Xhr.addEventListener('load',()=>{
    console.log(Xhr.response);
});
Xhr.open('GET','https://supersimplebackend.dev/not-supported');//open the http message
Xhr.send();
//url path after a domainn name eg https://supersimplaebackend.dev/hello hello is a url path 


//Xhr.open('GET','https://supersimplebackend.dev/images/apple.jpg');
//Xhr.open('GET','https://supersimplebackend.dev/hello');
//Xhr.open('GET','https://supersimplebackend.dev/products/first');//search chrom https://supersimplebackend.dev/products
//Xhr.open('GET','https://supersimplebackend.dev/documentation');
/*search in chrom https://supersimplebackend.dev/documentation
Documentation Page
This page shows you how to use this backend.
Intro
To use this backend, send an HTTP request to the URL:
https://supersimpledevbackend.dev
List of URL paths
Here is a list of URL paths that are supported by this backend.
Each URL path gives a different response when you send a request to it.
GET /
GET /hello
GET /products/first
GET /documentation
GET /images/apple.jpg
GET /products
GET /cart
POST /orders
GET /greeting
POST /greeting
GET /
Description
Returns a string.
Response
Hello! This is SuperSimpleDev's backend.

Documentation page:
https://supersimplebackend.dev/documentation
Back to top
GET /hello
Description
Returns a string.
Response
This is the URL path /hello
Back to top
GET /products/first
Description
Returns the first product in the Amazon project as a JSON string.
Response
{
  "id": "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
  "image": "images/products/athletic-cotton-socks-6-pairs.jpg",
  "name": "Black and Gray Athletic Cotton Socks - 6 Pairs",
  "rating": {"stars": 4.5, "count": 87},
  "priceCents": 1090,
  "keywords": ["socks", "sports", "apparel"]
}
Back to top
GET /documentation
Description
Returns the HTML of the documentation page (the current page) as a string.
Response
<!DOCTYPE html>
<html>
  <head>
    <title>SuperSimpleDev Backend Documentation</title>
    <link rel="stylesheet" href="documentation.css">
  </head>
  <body>
    <main>
      <h1 class="title" id="title">Documentation Page</h1>
      ...
  </body>
</html>
Back to top
GET /images/apple.jpg
Description
Returns an image of an apple.
Response

Back to top
GET /products
Description
Returns the list of products in the Amazon project as a JSON string.
Response
[{
  "id": "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
  "image": "images/products/athletic-cotton-socks-6-pairs.jpg",
  "name": "Black and Gray Athletic Cotton Socks - 6 Pairs",
  "rating": {
    "stars": 4.5,
    "count": 87
  },
  "priceCents": 1090,
  "keywords": ["socks", "sports", "apparel"]
}, {
  "id": "15b6fc6f-327a-4ec4-896f-486349e85a3d",
  "image": "images/products/intermediate-composite-basketball.jpg",
  "name": "Intermediate Size Basketball",
  "rating": {
    "stars": 4,
    "count": 127
  },
  "priceCents": 2095,
  "keywords": ["sports", "basketballs"]
}
...
]
Back to top
GET /cart
Description
Loads a fake cart.
Response
load cart
Back to top
POST /orders
Description
Takes a cart and creates a new order.
Request
In your request, send a cart array.
{
  cart: [{
    productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
    quantity: 2,
    deliveryOptionId: '1'
  }, {
    productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
    quantity: 1,
    deliveryOptionId: '2'
  }]
}
Response
Returns a new order object.
{
  "id": "0e3713e6-209f-4bef-a3e2-ca267ad830ea",
  "orderTime": "2024-02-27T20:57:02.235Z",
  "totalCostCents": 5800,
  "products": [
    {
      "productId": "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
      "quantity": 2,
      "estimatedDeliveryTime": "2024-03-01T20:57:02.235Z"
    },
    {
      "productId": "15b6fc6f-327a-4ec4-896f-486349e85a3d",
      "quantity": 1,
      "estimatedDeliveryTime": "2024-03-01T20:57:02.235Z"
    }
  ]
}
Back to top
GET /greeting
Description
Returns a greeting (string).
Response
Hello!
Back to top
POST /greeting
Description
Returns a greeting (string).
Request
Send a JSON with a name property.
{ name: "SuperSimpleDev" }
Response
Hi SuperSimpleDev!
Back to top*/
