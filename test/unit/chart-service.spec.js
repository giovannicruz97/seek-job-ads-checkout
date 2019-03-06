const Suite = use('Test/Suite')('Chart Service');
const { before, after, test } = Suite;
const Database = use('Database');

before(async () => {
  await Database.table('products').insert({
    id: 'example',
    name: 'Example',
    price: 100
  });

  await Database.table('customers').insert({
    name: 'Example customer'
  });

  const customer = await Database.select('id')
    .table('customers')
    .where('name', 'Example customer')
    .first();

  await Database.table('deals').insert({
    product_id: 'example',
    customer_id: customer.id,
    gets: 3,
    for: 2
  });

  await Database.table('discounts').insert({
    product_id: 'example',
    customer_id: customer.id,
    minimum_products: 4,
    price_drop: 49.99
  });
});

test('validate regular chart', async ({ assert }) => {
  const chartService = use('App/Services/ChartService');

  const actual = await chartService.calculateChart(null, [
    { id: 'example', quantity: 1 }
  ]);

  const expected = {
    customer: 'Other',
    total: 100,
    chart: [
      {
        id: 'example',
        name: 'Example',
        quantity: 1,
        price: 100
      }
    ]
  };

  assert.deepEqual(actual, expected);
});

test('validate special chart with deal', async ({ assert }) => {
  const chartService = use('App/Services/ChartService');
  const customer = await Database.table('customers')
    .select('id')
    .where('name', 'Example customer')
    .first();

  const actual = await chartService.calculateChart(customer.id, [
    {
      id: 'example',
      quantity: 2
    }
  ]);

  const expected = {
    customer: 'Example customer',
    total: 200,
    chart: [
      {
        id: 'example',
        name: 'Example',
        quantity: 3,
        price: 200
      }
    ]
  };

  assert.deepEqual(actual, expected);
});

test('validate special chart with discount', async ({ assert }) => {
  const chartService = use('App/Services/ChartService');
  const customer = await Database.table('customers')
    .select('id')
    .where('name', 'Example customer')
    .first();

  const actual = await chartService.calculateChart(customer.id, [
    {
      id: 'example',
      quantity: 4
    }
  ]);

  const expected = {
    customer: 'Example customer',
    total: 199.96,
    chart: [
      {
        id: 'example',
        name: 'Example',
        quantity: 4,
        price: 199.96
      }
    ]
  };

  assert.deepEqual(actual, expected);
});

after(async () => {
  await Database.table('deals')
    .where('product_id', 'example')
    .delete();
  await Database.table('discounts')
    .where('product_id', 'example')
    .delete();
  await Database.table('customers')
    .where('name', 'Example customer')
    .delete();
  await Database.table('products')
    .where('id', 'example')
    .delete();
});
