export const degToRad = (angle) => {
  return (angle * Math.PI) / 180;
};

export const getUFloat = (val) => {
  val = val.toString();
  let newVal = parseFloat(val);
  (!newVal || newVal < 0) && (newVal = 0);
  const dotIndex = val.indexOf('.');
  val && dotIndex === val.length - 1 && (newVal += '.');
  return newVal;
};

export const getFloat = (val) => {
  val = val.toString();
  let newVal = parseFloat(val);
  !newVal && (newVal = 0);
  const dotIndex = val.indexOf('.');
  val && dotIndex === val.length - 1 && (newVal += '.');
  return newVal;
};

export const componentToHex = (c) => {
  const hex = c.toString(16);
  return hex.length == 1 ? '0' + hex : hex;
};

export const rgbToHex = ({ r, g, b }) => {
  const hex =
    '#' +
    componentToHex(parseInt(r * 255)) +
    componentToHex(parseInt(g * 255)) +
    componentToHex(parseInt(b * 255));
  return hex;
};
