const { test } = use('Test/Suite')('ProductService unit test');

test('validate product extraction', ({ assert }) => {
  const productService = use('App/Services/ProductService');

  let productsIds = {
    classic: 1,
    standout: 2,
    premium: 3
  };

  let actual = productService.extractProduct(productsIds);
  let expected = [
    {
      id: 'classic',
      quantity: 1
    },
    {
      id: 'standout',
      quantity: 2
    },
    {
      id: 'premium',
      quantity: 3
    }
  ];

  assert.deepEqual(actual, expected);
});
