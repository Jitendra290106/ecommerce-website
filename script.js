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
// scripts.js

// Function to show the Add Product form
function showAddProductForm() {
    document.getElementById('add-product-form').style.display = 'block';
}

// Function to close the Add Product form
function closeAddProductForm() {
    document.getElementById('add-product-form').style.display = 'none';
}

// Function to handle the form submission and add a new product to the page
document.getElementById('product-form').addEventListener('submit', function (event) {
    event.preventDefault();

    // Get form values
    const name = document.getElementById('product-name').value;
    const description = document.getElementById('product-description').value;
    const price = document.getElementById('product-price').value;
    const stock = document.getElementById('product-stock').value;

    // Create a new product element
    const newProduct = document.createElement('div');
    newProduct.classList.add('product');

    newProduct.innerHTML = `
        <img src="https://via.placeholder.com/150" alt="${name}">
        <h3>${name}</h3>
        <p>${description}</p>
        <p>Price: $${price}</p>
        <p>Stock: ${stock}</p>
    `;

    // Append the new product to the product list
    document.getElementById('product-list').appendChild(newProduct);

    // Clear the form
    document.getElementById('product-form').reset();

    // Close the form after submission
    closeAddProductForm();
});
