import naifObjectIdNumbers from './src/data/naifObjectIdNumbers.json';
import mapNameToId from './src/map-name-to-id/mapNameToId';
import callHorizons from './src/call-horizons/callHORIZONS';
import parseOutputIntoJson from './src/parse-output-into-json/parseOutputIntoJson';
import fs from 'fs';
import emoji from 'node-emoji';

const { emojify } = emoji;

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

  const getErrorMessage = () =>
    emojify(
      '\n\t:robot_face: ERROR :x::x::x: DOES NOT COMPUTE :exclamation::exclamation::exclamation:\n'
    );

  if (isNaN(center as any))
    throw new Error(
      `
        ${getErrorMessage()}
        ${
          options.center
        } is not a valid origin for the coordinate system. For a valid list of coordinate origins, see: 
      
        ${JSON.stringify(naifObjectIdNumbers, null, 10)}
      `
    );

  if (
    !(
      options.units === 'AU-D' ||
      options.units === 'KM-D' ||
      options.units === 'KM-S'
    )
  )
    throw new Error(
      `
        ${getErrorMessage()}
        ${
          options.units
        } is not a valid set of units. Valid units are limited to the following:

          AU-D
          or KM-D 
          or KM-S
      `
    );

  const data: {
    name: string;
    date: string;
    x: number;
    y: number;
    z: number;
    vx: number;
    vy: number;
    vz: number;
  }[][] = [];

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

          console.log(
            '\x1b[36m%s\x1b[0m',
            emojify(`\n\n\n:unicorn_face: :owl: :earth_americas: Results:\n`)
          );

          console.log(data);

          console.log(
            '\x1b[35m',
            emojify(
              `\nVectors have been saved to :file_folder: ./${
                options.save
              }.json`
            )
          );

          console.log(
            '\x1b[30m',
            emojify(
              '\nBrought to you by :koala: :koala: :koala: TheHappyKoala :koala: :koala: :koala:\n\n\n'
            )
          );
        }
      );
  } catch (error) {
    console.log(error);
  }
}
