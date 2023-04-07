//nur ein erster Test, um kennen zulernen wie JS funktioniert
const buttons = document.querySelectorAll('.add-to-cart');


buttons.forEach(button => {
  button.addEventListener('click', addToCart);
});

function addToCart() {
  alert('Item added to cart!');
}
