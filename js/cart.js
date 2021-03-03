/* global Cart */
'use strict';

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
const table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);
let cart;

function loadCart() {
  const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  cart = new Cart(cartItems);
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
}

// TODO: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {
  let clear = document.getElementsByTagName('tbody')[0];
  clear.innerHTML = '';

}

let tabelElement = document.getElementsByTagName('tbody')[0];

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {

  // TODO: Find the table body

  // TODO: Iterate over the items in the cart
  // TODO: Create a TR
  // TODO: Create a TD for the delete link, quantity,  and the item
  // TODO: Add the TR to the TBODY and each of the TD's to the TR

  for (let i = 0; i < cart.items.length; i++) {
    let tr = document.createElement('tr');
    let deleteItem = document.createElement('Delete');
    let quantity = document.createElement('td');
    let itemElement = document.createElement('td');
    let deleteItems = document.createElement('td');
    let image=document.createElement('td');
    deleteItem.textContent = 'X';
    deleteItem.setAttribute('href', '#');
    deleteItem.setAttribute('att', cart.items[i].itemSelected);
    quantity.textContent = cart.items[i].quantitySelected;
    itemElement.textContent = cart.items[i].itemSelected;
    deleteItems.appendChild(deleteItem);
    tr.appendChild(deleteItems);
    tr.appendChild(quantity);
    tr.appendChild(itemElement);
    tabelElement.appendChild(tr);

  }





}





function removeItemFromCart(event) {

  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
  // TODO: Save the cart back to local storage
  // TODO: Re-draw the cart table
  for (let i = 0; i < cart.items.length; i++) {
    let att = event.target.getAttribute('att');
    if (att === cart.items[i].itemSelected) {
      cart.removeItem(i);

    }

    
    

  }
cart.saveToLocalStorage();
renderCart();

}


// This will initialize the page and draw the cart on screen
renderCart();
