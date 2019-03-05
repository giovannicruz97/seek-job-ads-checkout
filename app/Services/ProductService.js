class ProductService {
  extractProduct(products) {
    let productIds = Object.keys(products);
    let extractedProducts = productIds.map(product => {
      return { id: product, quantity: products[product] };
    });
    return extractedProducts;
  }
}

module.exports = new ProductService();
