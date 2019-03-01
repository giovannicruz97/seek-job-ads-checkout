"use strict";

class ChartController {
  async index({ request, response, view }) {
    const formData = request.post();
    console.log(formData);
    const title = "Chart Details";
    return view.render("chart_details", { title });
  }
}

module.exports = ChartController;
