'use strict';

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class DealsSchema extends Schema {
  up() {
    this.create('deals', table => {
      table.increments('id');
      table
        .string('product_id')
        .references('id')
        .inTable('products');
      table
        .integer('customer_id')
        .references('id')
        .inTable('customers');
      table.integer('gets').notNullable();
      table.integer('for').notNullable();
    });
  }

  down() {
    this.drop('deals');
  }
}

module.exports = DealsSchema;
