
let price = 2999;
let quantity = 1;

function updateTotal() {
    document.getElementById("qty").innerText = quantity;
    document.getElementById("total").innerText = price * quantity;
}

function increase() {
    quantity++;
    updateTotal();
}

function decrease() {
    if (quantity > 1) {
        quantity--;
        updateTotal();
    }
}

function addToCart() {
    alert("Added " + quantity + " items to cart");
}

updateTotal();
