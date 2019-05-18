import constructQuery from './constructQuery';
import url from '../api';

test('constructs a url with query parameters that return state vectors for a body', () => {
  expect(
    constructQuery({
      url,
      body: 'Ceres',
      units: 'AU-D',
      center: '@0',
      start: '2000-01-01',
      stop: '2000-12-31',
      step: '1 d'
    })
  ).toBe(
    `https://ssd.jpl.nasa.gov/horizons_batch.cgi?batch=1&COMMAND='Ceres'&OUT_UNITS='AU-D'&CENTER=@0&MAKE_EPHEM='YES'&TABLE_TYPE='VECTORS'&START_TIME='2000-01-01'&STOP_TIME='2000-12-31'&STEP_SIZE='1 d'&QUANTITIES='1,9,20,23,24'&CSV_FORMAT='YES'`
  );
});
