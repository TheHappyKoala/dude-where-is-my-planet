import naifObjectIdNumbers from './src/data/naifObjectIdNumbers.json';
import mapNameToId from './src/map-name-to-id/mapNameToId';
import callHorizons from './src/call-horizons/callHORIZONS';

export async function fetchBodies(options: {
  url: string;
  bodies: string;
  units: string;
  center: string;
  start: string;
  stop: string;
  step: string;
}) {
  const center = mapNameToId(options.center, naifObjectIdNumbers);

  if (isNaN(center as any))
    throw new Error(
      `${
        options.center
      } is not a valid origin for the coordinate system. For a valid list of coordinate origins, see: 
      
      ${JSON.stringify(naifObjectIdNumbers)}`
    );

  const data = [];

  try {
    for (const body of options.bodies) {
      const response = await callHorizons({
        url: options.url,
        body: mapNameToId(body, naifObjectIdNumbers).toString(),
        units: options.units,
        center: `@${center.toString()}`,
        start: options.start,
        stop: options.stop,
        step: options.step
      });

      data.push(response);
    }
  } catch (error) {
    console.log(error);
  }

  console.log(data);
}
