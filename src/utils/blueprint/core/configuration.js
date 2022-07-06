import { dimCentiMeter } from './constants';

/* The dimensioning unit for 2D floorplan measurements. */
export const configDimUnit = 'dimUnit';

/* The initial wall height in cm. */
export const configWallHeight = 'wallHeight';

/* The initial wall thickness in cm. */
export const configWallThickness = 'wallThickness';

export const configSystemUI = 'systemUI';

export const configScale = 'scale';

export const configGridSpacing = 'gridSpacing';

export const configSnapToGrid = 'snapToGrid';

export const configSnapTolerance = 'snapTolerance'; // In CMS

export let config = {
  dimUnit: dimCentiMeter,
  wallHeight: 250,
  wallThickness: 10,
  systemUI: true,
  scale: 1,
  snapToGrid: false,
  snapTolerance: 50,
  gridSpacing: 25,
  snapToRect: true,
  sameElevation: true,
  visibility: true,
};

export let wallInformation = {
  exterior: false,
  interior: false,
  midline: true,
  labels: true,
  exteriorLabel: 'e:',
  interiorLabel: 'i:',
  midlineLabel: 'm:',
};

/* Global configuration to customize the whole system. */
export class Configuration {
  constructor() {}

  static getData() {
    return config;
  }

  /* Set a configuration parameter. */
  static setValue(key, value) {
    config[key] = value;
  }

  /* Get a string configuration parameter. */
  static getStringValue(key) {
    return String(Configuration.getData()[key]);
  }

  /* Get a numeric configuration parameter. */
  static getNumericValue(key) {
    return Number(Configuration.getData()[key]);
  }
}
