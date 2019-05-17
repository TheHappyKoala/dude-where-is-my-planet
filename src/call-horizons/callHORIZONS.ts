import fetch from 'cross-fetch';
import url from '../api';
import naifObjectIdNumbers from '../data/naifObjectIdNumbers.json';
import mapNameToId from '../map-name-to-id/mapNameToId';
import constructQuery from '../construct-query/constructQuery';

export default (options: {
  url: string;
  body: string;
  units: string;
  center: string;
  start: string;
  stop: string;
  step: string;
}): Promise<string> =>
  fetch(
    constructQuery({
      url,
      body: mapNameToId(options.body, naifObjectIdNumbers).toString(),
      units: options.units,
      center: options.center,
      start: options.start,
      stop: options.stop,
      step: options.step
    })
  ).then(response => response.text());




  
