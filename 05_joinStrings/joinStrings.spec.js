const values = require('./joinStrings')

describe('step 2', () => {
  test('firstName is Joshua', () => {
    expect(values.firstName).toEqual('Joshua');
  });
  test.skip('lastName is Ranin', () => {
    expect(values.lastName).toEqual('Ranin');
  });
  test.skip('thisYear is 2025', () => {
    expect(values.thisYear).toEqual(2025);
  });
  test.skip('birthYear is 2006', () => {
    expect(values.birthYear).toEqual(2006);
  });
  test.skip('greeting is properly output', () => {
    expect(values.greeting).toEqual('Hello! My name is Joshua Ranin and I am 19 years old.');
  });
});

describe('step 3', () => {
  test.skip('fullName is Joshua Ranin', () => {
    expect(values.fullName).toEqual('Joshua Ranin');
  });
  test.skip('age is 19', () => {
    expect(values.age).toEqual(19);
  });
});
