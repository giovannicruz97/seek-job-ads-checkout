class ChartService {
  async calculateChart(companyId, products) {
    const Customer = use('App/Models/Customer');

    const customer = await Customer.find(companyId);

    if (!customer) {
      let regularChart = await this.regularChart(products);
      return {
        customer: customer ? customer : 'Other',
        total: regularChart.total,
        chart: regularChart.chart
      };
    }

    let specialChart = await this.specialChart(products, customer);

    return {
      customer: customer.name,
      total: specialChart.total,
      chart: specialChart.chart
    };
  }

  async regularChart(products) {
    const Product = use('App/Models/Product');

    let total = 0;
    let chart = [];

    for (let product of products) {
      if (product.quantity > 0) {
        let foundProduct = await Product.findBy('id', product.id);
        let addedProduct = {
          id: product.id,
          name: foundProduct.name,
          quantity: product.quantity,
          price: product.quantity * foundProduct.price
        };
        total += addedProduct.price;
        chart.push(addedProduct);
      }
    }

    return {
      total,
      chart
    };
  }

  async specialChart(products, customer) {
    const Product = use('App/Models/Product');

    let total = 0;
    let chart = [];

    for (let product of products) {
      if (product.quantity > 0) {
        let foundProduct = await Product.find(product.id);
        let discount = (await foundProduct
          .discounts()
          .where('customer_id', customer.id)
          .fetch()).toJSON();

        let addedProduct = {
          id: product.id,
          name: foundProduct.name,
          quantity: product.quantity,
          price: product.quantity * foundProduct.price
        };

        if (discount[0] && product.quantity >= discount[0].minimum_products) {
          addedProduct.price = product.quantity * discount[0].price_drop;
        }

        total += addedProduct.price;
        chart.push(addedProduct);
      }
    }

    return {
      total,
      chart
    };
  }
}

module.exports = new ChartService();
