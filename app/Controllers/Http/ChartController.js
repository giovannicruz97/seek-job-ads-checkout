class ChartController {
  async index({ request, response, view }) {
    const chartService = use('App/Services/ChartService');
    const productService = use('App/Services/ProductService');

    let companyId = request.only(['company']).company;
    let products = request.except(['_csrf', 'company']);

    products = productService.extractProduct(products);
    const chartDetails = await chartService.calculateChart(companyId, products);

    return view.render('chart_details', {
      title: 'Chart Details',
      chartDetails
    });
  }
}

module.exports = ChartController;
