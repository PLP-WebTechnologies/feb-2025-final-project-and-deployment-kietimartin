document.addEventListener('DOMContentLoaded', () => {
    loadCartItemCount();

    // Event listener for adding items to the cart
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', addToCart);
    });
});

function loadCartItemCount() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartItemCountElements = document.querySelectorAll('#cart-item-count');
    cartItemCountElements.forEach(element => {
        element.textContent = cart.length;
    });
}

function addToCart(event) {
    const button = event.target;
    const itemId = button.dataset.id;
    const itemName = button.dataset.name;
    const itemPrice = parseFloat(button.dataset.price);
    const itemImage = button.dataset.image;

    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const existingItem = cart.find(item => item.id === itemId);

    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({
            id: itemId,
            name: itemName,
            price: itemPrice,
            image: itemImage,
            quantity: 1
        });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    loadCartItemCount();
    alert(`${itemName} added to cart!`);
}