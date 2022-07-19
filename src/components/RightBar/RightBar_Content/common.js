export const isLeafComponent = (comp) => {
  if (
    !comp ||
    !comp.value ||
    typeof comp.value === 'number' ||
    typeof comp.value === 'string'
  )
    return true;
  if (Array.isArray(comp.value)) {
    for (let i in comp.value) {
      if (!isLeafComponent(comp.value[i])) {
        return false;
      }
    }
  } else return false;
  return true;
};
