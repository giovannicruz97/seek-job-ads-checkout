'use strict';

/*
|--------------------------------------------------------------------------
| ProductSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

const Database = use('Database');

class ProductSeeder {
  async run() {
    const insertedProducts = await Database.from('products').insert([
      {
        id: 'classic',
        name: 'Classic Ad',
        price: 269.99
      },
      {
        id: 'standout',
        name: 'Standout Ad',
        price: 322.99
      },
      {
        id: 'premium',
        name: 'Premium Ad',
        price: 394.99
      }
    ]);
    console.log(insertedProducts);
  }
}

module.exports = ProductSeeder;
