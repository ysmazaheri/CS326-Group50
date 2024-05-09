/*import OrderStorage from "../js-models/OrderStorage.js";
import Order from "../js-models/order.js";
import OrderCart from "../js-models/orderCart.js";
*/

import { OrderStorage } from "../js-models/OrderStorage.js";
const orderStorage = new OrderStorage();

const URL = "http://localhost:3000";
const buttonOne = document.getElementById("btnone");
const buttonTwo = document.getElementById("btntwo");

// Get the buttons
const btnOne = document.getElementById('btnone');
const btnTwo = document.getElementById('btntwo');

btnOne.addEventListener('click', async function () {
 
    const orderId = orderStorage.getId();
    try {
      const response = await fetch(`${URL}/order-complete?id=${orderId}`, {
        method: 'PUT'
      });
      if (response.ok) {
        // Order completed successfully, 
        //show confirmation to the person who ordered (a different user).
        helperMethod(true);
      } else {
        console.error('Error completing order');
        alert('Error completing order');
      }
    } catch (error) {
      console.error('Error completing order', error);
      alert('Error completing order');
    }
});

var boolean1 = false;
export function helperMethod(x) {
    boolean1 = x;
    return boolean1;
}

//below is for testing the delivery-completion.html page pop-up
/*var boolean1 = true;
export function helperMethod(x) {
    return boolean1;
}*/

btnTwo.addEventListener('click', async function () {
    const orderId = orderStorage.getId();

    try {
      const response = await fetch(`${URL}/order-complete?id=${orderId}`, {
        method: 'PUT'
      });
      if (response.ok) {
        // Order completed successfully, 
        //show confirmation to the person who ordered (a different user).
        helperMethod(true);
      } else {
        console.error('Error completing order');
        alert('Error completing order');
      }
    } catch (error) {
      console.error('Error completing order', error);
      alert('Error completing order');
    }
})

