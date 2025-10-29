let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Añadir al carrito
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        const product = {
            id: button.dataset.id,
            name: button.parentElement.querySelector('h3').textContent,
            price: button.parentElement.querySelector('.price').textContent
        };
        cart.push(product);
        updateCart();
    });
});

// Actualizar carrito
function updateCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
    document.getElementById('cart-count').textContent = cart.length;
}

// Mostrar productos en checkout
if (document.querySelector('.cart-items')) {
    cart.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.innerHTML = `<p>${item.name} - ${item.price}</p>`;
        document.querySelector('.cart-items').appendChild(itemElement);
    });
}


document.querySelector('.mobile-menu-btn').addEventListener('click', function() {
  document.querySelector('.nav-menu').classList.toggle('active');
});