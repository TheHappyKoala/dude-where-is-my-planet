import url from '../api';

const fetch = require('jest-fetch-mock');

jest.setMock('cross-fetch', fetch);

import callHORIZONS from './callHORIZONS';

describe('testing the horizons api', () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

  it('calls the horizons api and returns data to me', () => {
    fetch.once('Lots of fancy-pancy data');

    callHORIZONS({
      url,
      body: 'Ceres',
      units: 'AU-D',
      center: '@0',
      start: '2000-01-01',
      stop: '2000-01-02',
      step: '1 d'
    }).then(response => {
      expect(response).toEqual('Lots of fancy-pancy data');
    });

    expect(fetch.mock.calls.length).toEqual(1);
    expect(fetch.mock.calls[0][0]).toEqual(
      `https://ssd.jpl.nasa.gov/horizons_batch.cgi?batch=1&COMMAND='Ceres'&OUT_UNITS='AU-D'&CENTER=@0&MAKE_EPHEM='YES'&TABLE_TYPE='VECTORS'&START_TIME='2000-01-01'&STOP_TIME='2000-01-02'&STEP_SIZE='1 d'&QUANTITIES='1,9,20,23,24'&CSV_FORMAT='YES'`
    );
  });
});
