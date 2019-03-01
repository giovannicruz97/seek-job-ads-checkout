"use strict";

/*
|--------------------------------------------------------------------------
| CustomerSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

const Database = use("Database");

class CustomerSeeder {
  async run() {
    const insertedCustomers = await Database.from("customers").insert([
      { name: "UNILEVER" },
      { name: "APPLE" },
      { name: "NIKE" },
      { name: "FORD" }
    ]);
    console.log(insertedCustomers);
  }
}

module.exports = CustomerSeeder;
