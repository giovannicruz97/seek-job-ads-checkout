'use strict';

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class DiscountsSchema extends Schema {
  up() {
    this.create('discounts', table => {
      table.increments('id');
      table
        .string('product_id')
        .references('id')
        .inTable('products');
      table
        .integer('customer_id')
        .references('id')
        .inTable('customers');
      table.integer('minimum_products').notNullable();
      table.decimal('price_drop', 10, 2).notNullable();
    });
  }

  down() {
    this.drop('discounts');
  }
}

module.exports = DiscountsSchema;
