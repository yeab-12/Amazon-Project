import {renderOrderSummary} from './checkout/orderSummary.js';
import {renderPaymentSummary} from '/script/checkout/paymentSummary.js';
import {loadProducts,loadProductsFetch} from '../data/products.js';
import { cart, loadCart } from '../data/cart.js';
//import '../data/cart-class.js';
//import '../data/backend-practise.js';

/**Async Await is even better way to handle asynchronous code */
async function loadPage() {
    //console.log('load page');//async is makes a function return a promise
    
    // await lets us write asynchronous code like normal code
    // async await shortcut for promises 
    try{
        //throw 'error1';
        await loadProductsFetch(); 
        //reject let us create an error in the future
        const value = await new Promise((resolve,reject) => {
            //throw 'error2';
            loadCart(() => {
                //reject('error3');
                resolve('value3');
            });
        });
    } catch(error){
        console.log('Unexpected error, Please try agin later.');
    }
    renderOrderSummary();
    renderPaymentSummary();

    //return 'value2';
}
//await =lets us wait for a promise to finish,before going to the next lines
loadPage();
/*.then((value)=>{
    console.log('next step');
    console.log(value);
});*/


/*
Promise.all([
    loadProductsFetch()
    /*
    new Promise((resolve)=>{
        loadProducts(()=>{
            resolve('value1');
        });
    }),
    new Promise((resolve) => {
        loadCart(() => {
            resolve();
        });
    })
]).then((values)=>{
    console.log(values);
    renderOrderSummary();
    renderPaymentSummary();
});/*


/**promises class
     * better way to handle asynchronous code
     * similar to done() function
     * let us wait for some code to finish before moving to the next step
     promises help keep code flat is better than call back
new Promise((resolve)=>{//resolve is a function similar to done() and lets us control when to move to the next step
    //code that takes time to finish and it runs this inner function immediately
    //console.log('hello from the promise');
    //console.log('start promise');
    loadProducts(()=>{
        //console.log('finished loading');
        resolve('value1');//move to the next  then() step
    });

}).then(() => {
    //console.log('next step after loading products');
    console.log(value);
    return new Promise((resolve) => {
        loadCart(() => {
            resolve();
        });
    });
    
}).then(() => {
    renderOrderSummary(); 
    renderPaymentSummary();
});
*/

/* call back use promises instead of call back
loadProducts(() => {
    loadCart(() => {
      renderOrderSummary(); 
      renderPaymentSummary();
    });
});*/