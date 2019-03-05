class CheckoutController {
  async index({ request, response, view }) {
    const Customer = use('App/Models/Customer');
    const Product = use('App/Models/Product');
    const title = 'Job Ads Checkout';
    let customers = await Customer.query().fetch();
    let products = await Product.query().fetch();
    customers = customers.toJSON();
    products = products.toJSON();
    return view.render('index', { products, customers, title });
  }
}

module.exports = CheckoutController;
