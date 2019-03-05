var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
cart.push({itemName: item, itemPrice: Math.random()*Math.floor(100)});
return `${item} has been added to your cart.`;
}

function viewCart() {
  // write your code here
}

function total() {
 for (var i = 0; i < cart.length; i++) {
   
 }
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
