import { Configuration, configDimUnit, configScale } from './configuration.js';
import { floorPlanerScale } from './constants.js';

/* Dimensioning in Inch. */
export const dimInch = 'inch';

/* Dimensioning in Inch. */
export const dimFeetAndInch = 'ft';

/* Dimensioning in Meter. */
export const dimMeter = 'm';

/* Dimensioning in CentiMeter. */
export const dimCentiMeter = 'cm';

/* Dimensioning in MilliMeter. */
export const dimMilliMeter = 'mm';

export const decimals = 1000;
export const cmPerFoot = 30.48;
export const pixelsPerFoot = 15.0;
export const cmPerPixel = cmPerFoot * (1.0 / pixelsPerFoot);
export const pixelsPerCm = 1.0 / cmPerPixel;
export const dimensioningOptions = [
  dimInch,
  dimFeetAndInch,
  dimMeter,
  dimCentiMeter,
  dimMilliMeter,
];

/* Dimensioning functions. */
export class Dimensioning {
  static cmToPixel(cm, apply_scale = true) {
    if (apply_scale) {
      return cm * pixelsPerCm * Configuration.getNumericValue(configScale);
    }
    return cm * pixelsPerCm;
  }

  static pixelToCm(pixel, apply_scale = true) {
    if (apply_scale) {
      return (
        pixel * cmPerPixel * (1.0 / Configuration.getNumericValue(configScale))
      );
    }
    return pixel * cmPerPixel;
  }

  static roundOff(value, decimals) {
    return Math.round(decimals * value) / decimals;
  }

  /* Converts dimensioning number to cm number.
   * @param measure Dimensioning number to be converted.
   * @returns Float.
   */
  static cmFromMeasureRaw(measure, unit) {
    if (!unit) unit = Configuration.getStringValue(configDimUnit);
    console.log('cmFromMeasureRaw unit: ', unit);

    switch (unit) {
      case dimFeetAndInch:
        return (
          Math.round(
            decimals * (measure * 30.480016459203095991 * floorPlanerScale),
          ) / decimals
        );
      case dimInch:
        return (
          Math.round(
            decimals * (measure * 2.5400013716002578512 * floorPlanerScale),
          ) / decimals
        );
      case dimMilliMeter:
        return (
          Math.round(
            decimals * (measure * 0.10000005400001014955 * floorPlanerScale),
          ) / decimals
        );
      case dimCentiMeter:
        return measure;
      default:
        return Math.round(decimals * 100 * measure) / decimals;
    }
  }

  /* Converts dimensioning number to cm string.
   * @param measure Dimensioning number to be converted.
   * @returns String.
   */
  static cmFromMeasure(measure, unit) {
    return Dimensioning.cmFromMeasureRaw(measure, unit) + 'cm';
  }

  /* Converts cm to dimensioning number.
   * @param cm CentiMeter value to be converted.
   * @returns Float.
   */
  static cmToMeasureRaw(cm, power = 1, unit) {
    console.log('before unit: ', unit);
    console.log('config dim unit: ', configDimUnit);
    if (!unit) unit = Configuration.getStringValue(configDimUnit);
    console.log('after unit: ', unit);

    switch (unit) {
      case dimFeetAndInch: // dimFeetAndInch returns only the feet
        const fts = Math.round(
          (cm * Math.pow(0.032808416666669996953, power)) / floorPlanerScale,
        );
        return fts;
      case dimInch:
        const inches = Math.round(
          (decimals * (cm * Math.pow(0.3937, power))) /
            (decimals * floorPlanerScale),
        );
        return inches;
      case dimMilliMeter:
        const mms = Math.round(
          (decimals * (cm * Math.pow(10, power))) /
            (decimals * floorPlanerScale),
        );
        return mms;
      case dimCentiMeter:
        const cms = Math.round((decimals * cm) / (decimals * floorPlanerScale));
        return cms;
      default:
        const ms = Math.round(
          (decimals * (cm * Math.pow(0.01, power))) /
            (decimals * floorPlanerScale),
        );
        return ms;
    }
  }

  /* Converts cm to dimensioning string.
   * @param cm CentiMeter value to be converted.
   * @returns String.
   */
  static cmToMeasure(cm, power = 1, unit) {
    if (!unit) unit = Configuration.getStringValue(configDimUnit);
    const measureRaw = Dimensioning.cmToMeasureRaw(cm, power, unit);

    switch (unit) {
      case dimFeetAndInch:
        let floorFeet = Math.floor(measureRaw);
        let remainingFeet = measureRaw - floorFeet;
        let remainingInches = Math.round(remainingFeet * 12);
        return floorFeet + "'" + remainingInches + '"';
      case dimInch:
        return measureRaw + "'";
      case dimMilliMeter:
        return measureRaw + 'mm';
      case dimCentiMeter:
        return measureRaw + 'cm';
      default:
        return measureRaw + 'm';
    }
  }
}
