export const removeFromArray = (array: any, index: number) => {
  let newArray: any;
  if (index === 0) newArray = array.splice(1);
  else if (index === array.length - 1) newArray = array.splice(0, index);
  else newArray = [...array.slice(0, index), ...array.slice(index + 1)];
  return newArray;
};
