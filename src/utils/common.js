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
