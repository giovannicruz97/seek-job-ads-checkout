'use strict';

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class ProductsSchema extends Schema {
  up() {
    this.create('products', table => {
      table
        .string('id')
        .unique()
        .notNullable();
      table.string('name').notNullable();
      table.decimal('price', 10, 2).notNullable();
    });
  }

  down() {
    this.drop('products');
  }
}

module.exports = ProductsSchema;
