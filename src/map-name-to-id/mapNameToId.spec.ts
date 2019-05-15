import mapNameToId from './mapNameToId';

test('constructs a url with query parameters that return state vectors for Ceres', () => {
  expect(
    mapNameToId('Earth Moo', [
      { id: 3, name: 'EARTH MOON BARYCENTER' },
      { id: 4, name: 'MARS_BARYCENTER' }
    ])
  ).toBe(3);
});
