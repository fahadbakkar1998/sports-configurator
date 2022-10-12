import Enum from 'es6-enum';

export const VIEW_TOP = 'TOP_VIEW';
export const VIEW_FRONT = 'FRONT_VIEW';
export const VIEW_RIGHT = 'RIGHT_VIEW';
export const VIEW_LEFT = 'LEFT_VIEW';
export const VIEW_ISOMETRY = 'ISOMETRY_VIEW';

export const WallTypes = Enum('STRAIGHT', 'CURVED');

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

export const floorPlanerScale = 0.1;

export const sphereRadius = 40000 * floorPlanerScale;

/* The tolerance in cms between corners, otherwise below this tolerance they will snap together as one corner */
export const cornerTolerance = 20 * floorPlanerScale;

export const minSize = 1 * floorPlanerScale;

export const minGap = 1 * floorPlanerScale;
