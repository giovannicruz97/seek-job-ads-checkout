'use strict';

/*
|--------------------------------------------------------------------------
| DiscountSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

const Database = use('Database');

class DiscountSeeder {
  async run() {
    const insertedDiscounts = await Database.from('discounts').insert([
      {
        product_id: 'standout',
        customer_id: 2,
        minimum_products: 0,
        price_drop: 299.99
      },
      {
        product_id: 'premium',
        customer_id: 3,
        minimum_products: 4,
        price_drop: 379.99
      },
      {
        product_id: 'standout',
        customer_id: 4,
        minimum_products: 0,
        price_drop: 309.99
      },
      {
        product_id: 'premium',
        customer_id: 4,
        minimum_products: 3,
        price_drop: 389.99
      }
    ]);
    console.log(insertedDiscounts);
  }
}

module.exports = DiscountSeeder;
