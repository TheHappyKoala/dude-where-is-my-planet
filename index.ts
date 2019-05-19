import naifObjectIdNumbers from './src/data/naifObjectIdNumbers.json';
import mapNameToId from './src/map-name-to-id/mapNameToId';
import callHorizons from './src/call-horizons/callHORIZONS';
import parseOutputIntoJson from './src/parse-output-into-json/parseOutputIntoJson';
import fs from 'fs';

export async function fetchBodies(options: {
  url: string;
  bodies: string;
  units: string;
  center: string;
  start: string;
  stop: string;
  step: string;
  save: string;
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

      const json = await parseOutputIntoJson(response);

      data.push(json);
    }

    if (options.save)
      fs.writeFile(
        `./${options.save}.json`,
        JSON.stringify(data),
        'utf8',
        error => {
          if (error) throw error;

          console.log(`Vectors have been saved to ./${options.save}.json`);
        }
      );

    console.log(data);
  } catch (error) {
    console.log(error);
  }
}
