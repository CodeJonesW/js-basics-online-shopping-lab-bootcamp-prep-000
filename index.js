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
   for (var i = 0; i < cart.length; i++) {
   return cart[i];
 }
}

function total() {

}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
