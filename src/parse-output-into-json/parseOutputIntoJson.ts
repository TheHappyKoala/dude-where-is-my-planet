import csv from 'csvtojson';

export default async (output: string): Promise<any[]> => {
  const start = `$$SOE`;
  const end = `$$EOE`;

  const keys = 'JDTDB, Calendar Date (TDB), x, y, z, vx, vy, vz, LT, RG, RR,';

  const quantities = `${keys}${output.substring(
    output.lastIndexOf(start) + 1,
    output.lastIndexOf(end)
  )}`;

  const json = await csv().fromString(quantities);

  return json.map(entry => ({
    name: output
      .match(new RegExp('Target body name:(.*)  '))[1]
      .trim(),
    date: entry['Calendar Date (TDB)'],
    x: parseFloat(entry.x),
    y: parseFloat(entry.y),
    z: parseFloat(entry.z),
    vx: parseFloat(entry.vx),
    vy: parseFloat(entry.vy),
    vz: parseFloat(entry.vz)
  }));
};


