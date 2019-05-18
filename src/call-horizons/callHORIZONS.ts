import fetch from 'cross-fetch';
import constructQuery from '../construct-query/constructQuery';

export default (options: {
  url: string;
  body: string;
  units: string;
  center: string;
  start: string;
  stop: string;
  step: string;
}): Promise<string> => {
  return fetch(
    constructQuery({
      url: options.url,
      body: options.body,
      units: options.units,
      center: options.center,
      start: options.start,
      stop: options.stop,
      step: options.step
    })
  ).then(response => response.text());
};
