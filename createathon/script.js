
let cart = [];
let totalAmount = 0;

function addToCart(product, price, quantity) {
    const existingProductIndex = cart.findIndex(item => item.product === product);
    if (existingProductIndex !== -1) {
        cart[existingProductIndex].quantity += quantity;
        cart[existingProductIndex].price += price * quantity;
    } else {
        cart.push({ product, price: price * quantity, quantity });
    }
    totalAmount += price * quantity;
    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById('cartItems');
    const totalElement = document.getElementById('totalAmount');

    cartItems.innerHTML = '';
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.product} - $${item.price} (x${item.quantity})`;
        li.appendChild(createRemoveButton(item.product));
        cartItems.appendChild(li);
    });

    totalElement.textContent = totalAmount.toFixed(2);
}

function createRemoveButton(product) {
    const button = document.createElement('button');
    button.textContent = 'Remove';
    button.onclick = () => removeFromCart(product);
    return button;
}

function removeFromCart(product) {
    const itemIndex = cart.findIndex(item => item.product === product);
    if (itemIndex !== -1) {
        totalAmount -= cart[itemIndex].price;
        cart.splice(itemIndex, 1);
        updateCart();
    }
}

function checkout() {
    alert(`Thank you for your purchase! Your total amount is $${totalAmount.toFixed(2)}.`);
    cart = [];
    totalAmount = 0;
    updateCart();
}
