import naifObjectIdNumbers from '../data/naifObjectIdNumbers.json';
import getErrorMessage from '../utils/getErrorMessage';

export default (options: { center: string | number; units: string }): void => {
  if (isNaN(options.center as any))
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
};
