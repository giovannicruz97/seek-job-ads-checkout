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
          quantity: parseInt(product.quantity),
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
        let discount = await foundProduct
          .discounts()
          .where('customer_id', customer.id)
          .first();

        let deal = await foundProduct
          .deals()
          .where('customer_id', customer.id)
          .first();

        let addedProduct = {
          id: product.id,
          name: foundProduct.name,
          quantity: parseInt(product.quantity),
          price: product.quantity * foundProduct.price
        };

        if (discount && product.quantity >= discount.minimum_products) {
          addedProduct.price = product.quantity * discount.price_drop;
        }

        if (deal && product.quantity == deal.for) {
          let withdrawal = deal.gets - deal.for;
          for (let i = 0; i < withdrawal; i++) {
            addedProduct.quantity += i + 1;
          }
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
