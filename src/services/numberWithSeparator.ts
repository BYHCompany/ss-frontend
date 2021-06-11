//This fn separate number with spaces after every 3 symbols
export const numberWithSeparators = (num: number) => {
  let number = num.toString();
  let pattern = /(-?\d+)(\d{3})/;
  while (pattern.test(number)) number = number.replace(pattern, '$1 $2');
  return number;
};
