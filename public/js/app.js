function checkSelectedProducts() {
  let products = [...document.getElementsByTagName('input')];
  delete products[0];
  let filtered = products.filter(product => product.value > 0);

  if (filtered.length <= 0) {
    alert('Select at least one product');
    return false;
  }
}
