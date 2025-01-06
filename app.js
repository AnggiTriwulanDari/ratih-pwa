let cart = [];
let totalItems = 0;
let totalPrice = 0;

function addToCart(productName, productPrice) {
    // Tambahkan produk ke keranjang
    cart.push({ name: productName, price: productPrice });
    totalItems++;
    totalPrice += productPrice;

    // Perbarui tampilan keranjang
    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById("cart-items");
    const totalCount = document.getElementById("total-count");
    const totalPriceElement = document.getElementById("total-price");

    // Kosongkan elemen keranjang
    cartItems.innerHTML = "";

    // Tambahkan item ke keranjang
    cart.forEach(item => {
        const li = document.createElement("li");
        li.textContent = `${item.name} - Rp ${item.price.toLocaleString()}`;
        cartItems.appendChild(li);
    });

    // Perbarui total produk dan harga
    totalCount.textContent = `Total Produk: ${totalItems}`;
    totalPriceElement.textContent = `Total Harga: Rp ${totalPrice.toLocaleString()}`;
}
