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
  newString = 'In your cart, you have ';
  if (cart.length === 0) {
    return 'Your shopping cart is empty.';
  }
 for (var i = 0; i < cart.length; i ++) {
   newString += `In your cart, you have
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
