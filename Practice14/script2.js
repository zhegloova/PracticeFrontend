
const products = document.querySelectorAll('.product');
const cart = document.getElementById('cart');
let total = 0
products.forEach(product => {
  product.addEventListener('dragstart', (e) => {
    e.dataTransfer.setData('text/plain', e.target.id);
  });
})
cart.addEventListener('dragover', (e) => {
  e.preventDefault();
})
cart.addEventListener('drop', (e) => {
  e.preventDefault();
  const productId = e.dataTransfer.getData('text/plain');
  const product = document.getElementById(productId);
  const price = parseInt(product.getAttribute('data-price'));
  total += price;
  document.getElementById('total').innerText = total;
});
const element = document.getElementById('slider');

element.addEventListener('mouseover', () => {
  element.style.backgroundColor = 'lightpink';
});

element.addEventListener('mouseout', () => {
  element.style.backgroundColor = 'grey';
});