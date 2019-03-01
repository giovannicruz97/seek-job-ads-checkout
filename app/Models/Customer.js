"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class Customer extends Model {
  discounts() {
    return this.hasMany("App/Models/Discount");
  }
  deals() {
    return this.hasMany("App/Models/Deal");
  }
}

module.exports = Customer;
