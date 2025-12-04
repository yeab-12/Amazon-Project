class Cart{
    cartItems;
    #localStorageKey;

    constructor(localStorageKey){
        this.localStorageKey=localStorageKey;
        this.#loadFromStorage();

    }

    #loadFromStorage(){
        this.cartItems=JSON.parse(localStorage.getItem(this.#localStorageKey));

        if(!this.cartItems){
            this.cartItems=[{
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
    saveToStorage(){
        localStorage.setItem(this.#localStorageKey,JSON.stringify(this.cartItems));
    }
    addToCart(productId){
        let matchingItem;
        this.cartItems.forEach((cartItem) =>{
            if(productId === cartItem.productId){
                matchingItem=cartItem;
            }
        });
            
        if(matchingItem){
            matchingItem.quantity +=  1;
        }else{
            this.cartItems.push({
                productId:productId,
                quantity:1,
                deliveryOptionId:'1' // Fixed typo: deliveryOptionsId -> deliveryOptionId
            });
        }

        this.saveToStorage(); // Added missing saveToStorage
    }

    removeFromCart(productId){
        const newCart = [];

        /*or
        let cartQuantity=0;
        cart forEach((item)=>{
            cartQuantity += item.quantity;
        });
            document.querySelector('.js-cart-quantity').innerHTML=cartQuantity;
        }); */

        this.cartItems.forEach((cartItem) =>{
            if(cartItem.productId !== productId){
                newCart.push(cartItem);
            }
        });

        this.cartItems = newCart;
        //if refresh the page we must save
        this.saveToStorage();
    }

    updateDeliveryOption(productId,deliveryOptionId){
        let matchingItem;
        this.cartItems
        .forEach((cartItem) =>{
            if(productId === cartItem.productId){
                matchingItem=cartItem;
            }
        });
        // Removed unnecessary conditional check, assuming matchingItem is always found
        matchingItem.deliveryOptionId=deliveryOptionId;

        this.saveToStorage();
    }


}


const cart= new Cart('cart-oop');
const businessCart=new Cart('business-cart');



console.log('cart oop',cart);
console.log('business cart',businessCart);
//to check instance of 
console.log(businessCart instanceof Cart);

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




