"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class CustomersSchema extends Schema {
  up() {
    this.create("customers", table => {
      table.increments("id");
      table.string("name").notNullable();
    });
  }

  down() {
    this.drop("customers");
  }
}

module.exports = CustomersSchema;
