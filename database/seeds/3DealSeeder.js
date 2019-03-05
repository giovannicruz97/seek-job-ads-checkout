'use strict';

/*
|--------------------------------------------------------------------------
| DealSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Database = use('Database');

class DealSeeder {
  async run() {
    const insertedDeals = await Database.from('deals').insert([
      {
        product_id: 'classic',
        customer_id: 1,
        gets: 3,
        for: 2
      },
      {
        product_id: 'classic',
        customer_id: 4,
        gets: 5,
        for: 4
      }
    ]);
    console.log(insertedDeals);
  }
}

module.exports = DealSeeder;
