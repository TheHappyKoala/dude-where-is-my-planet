import validateOptions from './validateOptions';

test('Ascertain that our validation method throws an error when receiving incorrect input.', () => {
  expect(() =>
    validateOptions({
      center: 'bob',
      units: 'AU-D'
    })
  ).toThrow();

  expect(() =>
    validateOptions({
      center: 20,
      units: 'AU-L'
    })
  ).toThrow();
});
