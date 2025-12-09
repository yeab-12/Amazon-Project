import {cart} from '../../data/cart.js';
import {getProduct} from '../../data/products.js';
import {getDeliveryOption} from '../../data/deliveryOptions.js';
import {formatCurrency} from '../utils/money.js';
import { addOrder } from '../../data/orders.js';

export function renderPaymentSummary(){
    let productPriceCents=0;
    let shippingPriceCents=0;

    cart.forEach((cartItem)=>{
        const product=getProduct(cartItem.productId);
        productPriceCents += product.priceCents*cartItem.quantity;
        
        const deliveryOption=getDeliveryOption(cartItem.deliveryOptionId);
        shippingPriceCents+=deliveryOption.priceCents;
    });
    
   
   //console.log(productPriceCents);
   //console.log(shippingPriceCents);
   const totalBeforeTaxCents=productPriceCents+shippingPriceCents;
   const taxCents=totalBeforeTaxCents*0.1;
   const totalCents=totalBeforeTaxCents+taxCents;

   const paymentSummaryHTML=`
          <div class="payment-summary-title">
            Order Summary
          </div>

          <div class="payment-summary-row">
            <div>Items (3):</div>
            <div class="payment-summary-money">
              $${formatCurrency(productPriceCents)}
            </div>
          </div>

          <div class="payment-summary-row">
            <div>Shipping &amp; handling:</div>
            <div class="payment-summary-money">
              $${formatCurrency(shippingPriceCents)}
            </div>
          </div>

          <div class="payment-summary-row subtotal-row">
            <div>Total before tax:</div>
            <div class="payment-summary-money">
              $${formatCurrency(totalBeforeTaxCents)}
            </div>
          </div>

          <div class="payment-summary-row">
            <div>Estimated tax (10%):</div>
            <div class="payment-summary-money">
              $${formatCurrency(taxCents)}
            </div>
          </div>

          <div class="payment-summary-row total-row">
            <div>Order total:</div>
            <div class="payment-summary-money">
              ${formatCurrency(totalCents)}
            </div>
          </div>

          <button class="place-order-button button-primary js-place-order">
            Place your order
          </button>
   `;

   document.querySelector('.js-payment-summary').innerHTML=paymentSummaryHTML;
  
   //when we click this button make a request to the backend to create the order
   document.querySelector('.js-place-order').addEventListener('click',async ()=>{
    //to send data in request we need to use a different type of request
    /*4 types of request 
    GET=get something from backend 
    POST=create something
    PUT=update something 
    DELETE=delete something
    headers gives the backend more info about our request
    */

    try{

      const response = await fetch('https://supersimplebackend.dev/products',{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },//we cannot send an object directly we need to convert it into a JSON string
      body:JSON.stringify({
        cart:cart
      })
    });

    const order = await response.json;
    //console.log(order);
    addOrder(order);
    }catch(error){

      console.log('Unexpected error, Please try agin later.');
    }
    
    window.location.href='orders.html';
  });
}