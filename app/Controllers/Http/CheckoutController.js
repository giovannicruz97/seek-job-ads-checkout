"use strict";

class CheckoutController {
  async index({ request, response, view }) {
    const Customer = use("App/Models/Customer");
    let customers = await Customer.query().fetch();
    customers = customers.toJSON();
    const title = "Job Ads Checkout";
    return view.render("index", { customers, title });
  }
}

module.exports = CheckoutController;
