import mapNameToId from './mapNameToId';

test('maps a name to an id; if one exists', () => {
  expect(
    mapNameToId('Earth Moo', [
      { id: 3, name: 'EARTH MOON BARYCENTER' },
      { id: 4, name: 'MARS_BARYCENTER' }
    ])
  ).toBe(3);
});

