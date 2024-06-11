//testimony slider
var swiper = new Swiper(".slide-content", {
  slidesPerView: 3,
  spaceBetween: 25,
  loop: true,
  centerSlide: "true",
  fade: "true",
  grabCursor: "true",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    520: {
      slidesPerView: 2,
    },
    950: {
      slidesPerView: 3,
    },
  },
});

//cart
let cart = [];
let total = 0;

function addToCart(productName, productPrice) {
  cart.push({ name: productName, price: productPrice });
  total += productPrice;
  updateCart();
}

function updateCart() {
  const cartItemsContainer = document.getElementById("cart-items");
  cartItemsContainer.innerHTML = "";
  cart.forEach((item) => {
    const cartItem = document.createElement("div");
    cartItem.className = "cart-item";
    cartItem.innerHTML = `<span>${item.name}</span><span>$${item.price.toFixed(
      2
    )}</span>`;
    cartItemsContainer.appendChild(cartItem);
  });
  document.getElementById("total").textContent = total.toFixed(2);
}

//sort
function changeQuantity(button, delta) {
  const quantityInput = button.parentElement.querySelector('input');
  let newQuantity = parseInt(quantityInput.value) + delta;
  if (newQuantity < 1) newQuantity = 1;
  quantityInput.value = newQuantity;
  updateTotal();
}

function updateTotal() {
  let total = 0;
  document.querySelectorAll('.cart-item').forEach(item => {
      const price = parseFloat(item.querySelector('.cart-item-details p').innerText.replace('Price: $', ''));
      const quantity = parseInt(item.querySelector('.cart-item-quantity input').value);
      total += price * quantity;
  });
  document.getElementById('cart-total').innerText = total.toFixed(2);
}

function removeItem(button) {
  const item = button.parentElement;
  item.parentElement.removeChild(item);
  updateTotal();
}

document.addEventListener('DOMContentLoaded', () => {
  updateTotal();
});