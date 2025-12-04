export let cart;
loadFromStorage();

export function loadFromStorage(){
    cart=JSON.parse(localStorage.getItem('cart'));

    if(!cart){
        cart=[{
            productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
            quantity:2,
            deliveryOptionId:'1' // Fixed typo: deliveryOptionsId -> deliveryOptionId
        },{
            productId:'15b6fc6f-327a-4ec4-896f-486349e85a3d',
            quantity:1,
            deliveryOptionId:'2' // Fixed typo: deliveryOptionsId -> deliveryOptionId
        }];

    }
}
//add to local storage
function saveToStorage(){
    localStorage.setItem('cart',JSON.stringify(cart));
}
export function addToCart(productId){
    let matchingItem;
    cart.forEach((cartItem) =>{
        if(productId === cartItem.productId){
            matchingItem=cartItem;
        }
    });
        
    if(matchingItem){
        matchingItem.quantity +=  1;
    }else{
        cart.push({
            productId:productId,
            quantity:1,
            deliveryOptionId:'1' // Fixed typo: deliveryOptionsId -> deliveryOptionId
        });
    }

    saveToStorage(); // Added missing saveToStorage
}


/*main idea of js 3. is make it interactive 

export function addToCart(productId){
    steps
    1.check if the product id already in the cart.
    2.if it is in the cart, increase the quantity.
    3.if it's not in thr cart, add it to the cart.
    for same product name d/t color  or type to fix it
    give each product an id and this id should be unique
    
        let matchingItem;

        cart.forEach((cartItem)=>{
            if(productId === cartItem.productId){
                matchingItem=cartItem;
            }
        });
        if(matchingItem){
            matchingItem.quantity +=  1;
        }else{
            cart.push({
                productId:productId,
                quantity:1
            });
        }
        //if refresh the page we must save
        saveToStorage();
}
*/

/*steps
1.create a new array
2.loop through the cart
3.add each product to the new array,expect for this productId */

export function removeFromCart(productId){
    const newCart = [];

    /*or
    let cartQuantity=0;
    cart forEach((item)=>{
        cartQuantity += item.quantity;
    });
        document.querySelector('.js-cart-quantity').innerHTML=cartQuantity;
    }); */

    cart.forEach((cartItem) =>{
        if(cartItem.productId !== productId){
            newCart.push(cartItem);
        }
    });

    cart = newCart;
    //if refresh the page we must save
    saveToStorage();
}

export function updateDeliveryOption(productId,deliveryOptionId){
    let matchingItem;
    cart.forEach((cartItem) =>{
        if(productId === cartItem.productId){
            matchingItem=cartItem;
        }
    });
    // Removed unnecessary conditional check, assuming matchingItem is always found
    matchingItem.deliveryOptionId=deliveryOptionId;

    saveToStorage();
}

export function loadCart(fun){
  const Xhr=new XMLHttpRequest();
  Xhr.addEventListener('load',()=>{
      console.log(Xhr.response);
      fun();
  });
  Xhr.open('GET','https://supersimplebackend.dev/cart');
  Xhr.send();
}