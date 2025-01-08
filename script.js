// script.js
//Initialize cart as an empty array
let cart = [];
// Select cart elements
const cartItems =
document.getElementById('cart-items');
const cartTotal =
document.getElementById('cart-total');
const checkoutButton =
document.getElementById('checkout');
//Add event listeners to "Add to Cart" buttons
document.querySelectorAll('.add-to-cart')
.forEach(button =>{
    button.addEventListener('click', event => {
        const product =
        event.target.closet('.product');
        const productId = product.dataset.id;
        const productName = product.dataset.name;
        const productPrice = parseFloat (product.dataset.price);

        //Add product to the cart
        const existingProduct = cart.find(item => item.id === productId);
        if (existingProduct) {
            existingProduct.quantity++;
        } else {
            cart.push({ id: productId, name: productName, price: productPrice, quantity: 1});
        }
        updateCart();
    });
});

//Update cart display
function updateCart() {
    cartItems.innerHTML = '';
    let total = 0;
    cart.forEach(item => {
        total += item.price * item.quantity;
        const itemElement = 
        document.createElement('div');
        itemElement.textContent = `${item.name}- $${item.price} x ${item.quantity}`;
        cartItems.appendChild(itemElement);
    });
    cartTotal.textContent = total.toFixed(2);
}
//Checkout button functionality
checkoutButton.addEventListener('click',() => {
    alert('Thank you for your purchase!');
    cart = []; //Clear the cart
    updateCart();
});