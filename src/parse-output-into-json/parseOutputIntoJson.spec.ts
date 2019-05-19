import parseOutputIntoJson from './parseOutputIntoJson';

test('It takes output from JPL HORIZONS, extract the state vector data, and parases it into JSON', async () => {
  expect.assertions(1);

  const data = await parseOutputIntoJson(
    "*******************************************************************************\r\n Revised: Jul 31, 2013           Uranus Barycenter                            7\r\n \r\n Dynamical point:\r\n ---------------\r\n The location of the center-of-mass of the Uranus system. The point about \r\n which Uranus and its satellites revolve. See 799 for Uranus center.\r\n*******************************************************************************\r\n \r\n \r\n*******************************************************************************\r\nEphemeris / WWW_USER Sat May 18 22:16:35 2019 Pasadena, USA      / Horizons    \r\n*******************************************************************************\r\nTarget body name: Uranus Barycenter (7)           {source: DE431mx}\r\nCenter body name: Sun (10)                        {source: DE431mx}\r\nCenter-site name: BODY CENTER\r\n*******************************************************************************\r\nStart time      : A.D. 2001-Jan-01 00:00:00.0000 TDB\r\nStop  time      : A.D. 2001-Jan-02 00:00:00.0000 TDB\r\nStep-size       : 1440 minutes\r\n*******************************************************************************\r\nCenter geodetic : 0.00000000,0.00000000,0.0000000 {E-lon(deg),Lat(deg),Alt(km)}\r\nCenter cylindric: 0.00000000,0.00000000,0.0000000 {E-lon(deg),Dxy(km),Dz(km)}\r\nCenter radii    : 696000.0 x 696000.0 x 696000.0 k{Equator, meridian, pole}    \r\nOutput units    : AU-D                                                         \r\nOutput type     : GEOMETRIC cartesian states\r\nOutput format   : 3 (position, velocity, LT, range, range-rate)\r\nReference frame : ICRF/J2000.0                                                 \r\nCoordinate systm: Ecliptic and Mean Equinox of Reference Epoch                 \r\n*******************************************************************************\r\n            JDTDB,            Calendar Date (TDB),                      X,                      Y,                      Z,                     VX,                     VY,                     VZ,                     LT,                     RG,                     RR,\r\n**************************************************************************************************************************************************************************************************************************************************************************\r\n$$SOE\r\n2451910.500000000, A.D. 2001-Jan-01 00:00:00.0000,  1.537333848701001E+01, -1.272455314347841E+01, -2.465765046150226E-01,  2.471867798215083E-03,  2.849985365023144E-03, -2.137591059708073E-05,  1.152667566773800E-01,  1.995782024445599E+01,  8.725105736582817E-05,\r\n2451911.500000000, A.D. 2001-Jan-02 00:00:00.0000,  1.537581006579614E+01, -1.272170292751282E+01, -2.465978758151235E-01,  2.471289767951921E-03,  2.850446542326210E-03, -2.136648969837575E-05,  1.152672605205159E-01,  1.995790748219068E+01,  8.722441968781920E-05,\r\n$$EOE\r\n**************************************************************************************************************************************************************************************************************************************************************************\r\nCoordinate system description:\r\n\r\n  Ecliptic and Mean Equinox of Reference Epoch\r\n\r\n    Reference epoch: J2000.0\r\n    XY-plane: plane of the Earth's orbit at the reference epoch\r\n              Note: obliquity of 84381.448 arcseconds wrt ICRF equator (IAU76)\r\n    X-axis  : out along ascending node of instantaneous plane of the Earth's\r\n              orbit and the Earth's mean equator at the reference epoch\r\n    Z-axis  : perpendicular to the xy-plane in the directional (+ or -) sense\r\n              of Earth's north pole at the reference epoch.\r\n\r\n  Symbol meaning [1 au= 149597870.700 km, 1 day= 86400.0 s]:\r\n\r\n    JDTDB    Julian Day Number, Barycentric Dynamical Time\r\n      X      X-component of position vector (au)                               \r\n      Y      Y-component of position vector (au)                               \r\n      Z      Z-component of position vector (au)                               \r\n      VX     X-component of velocity vector (au/day)                           \r\n      VY     Y-component of velocity vector (au/day)                           \r\n      VZ     Z-component of velocity vector (au/day)                           \r\n      LT     One-way down-leg Newtonian light-time (day)                       \r\n      RG     Range; distance from coordinate center (au)                       \r\n      RR     Range-rate; radial velocity wrt coord. center (au/day)            \r\n\r\nGeometric states/elements have no aberrations applied.\r\n\r\n Computations by ...\r\n     Solar System Dynamics Group, Horizons On-Line Ephemeris System\r\n     4800 Oak Grove Drive, Jet Propulsion Laboratory\r\n     Pasadena, CA  91109   USA\r\n     Information: http://ssd.jpl.nasa.gov/\r\n     Connect    : telnet://ssd.jpl.nasa.gov:6775  (via browser)\r\n                  http://ssd.jpl.nasa.gov/?horizons\r\n                  telnet ssd.jpl.nasa.gov 6775    (via command-line)\r\n     Author     : Jon.D.Giorgini@jpl.nasa.gov\r\n*******************************************************************************\r\n\r\n!$$SOF\r\nCOMMAND = '7'\r\nOUT_UNITS = 'AU-D'\r\nCENTER = @10\r\nMAKE_EPHEM = 'YES'\r\nTABLE_TYPE = 'VECTORS'\r\nSTART_TIME = '2001-01-01'\r\nSTOP_TIME = '2001-01-02'\r\nSTEP_SIZE = '1 d'\r\nQUANTITIES = '1,9,20,23,24'\r\nCSV_FORMAT = 'YES'\r\n"
  );
  
  expect(data).toStrictEqual([
    {
      JDTDB: '2451910.500000000',
      'Calendar Date (TDB)': 'A.D. 2001-Jan-01 00:00:00.0000',
      x: '1.537333848701001E+01',
      y: '-1.272455314347841E+01',
      z: '-2.465765046150226E-01',
      vx: '2.471867798215083E-03',
      vy: '2.849985365023144E-03',
      vz: '-2.137591059708073E-05',
      LT: '1.152667566773800E-01',
      RG: '1.995782024445599E+01',
      RR: '8.725105736582817E-05',
      $SOE: ''
    },
    {
      JDTDB: '2451911.500000000',
      'Calendar Date (TDB)': 'A.D. 2001-Jan-02 00:00:00.0000',
      x: '1.537581006579614E+01',
      y: '-1.272170292751282E+01',
      z: '-2.465978758151235E-01',
      vx: '2.471289767951921E-03',
      vy: '2.850446542326210E-03',
      vz: '-2.136648969837575E-05',
      LT: '1.152672605205159E-01',
      RG: '1.995790748219068E+01',
      RR: '8.722441968781920E-05',  
      $SOE: ''
    }
  ]);
});
