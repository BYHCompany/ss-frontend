export const logslider = (position: number) => {
  // position will be between 0 and 100
  var minp = 0;
  var maxp = 100;

  // The result should be between 100 an 10000000
  var minv = Math.log(100);
  var maxv = Math.log(3000000);

  // calculate adjustment factor
  var scale = (maxv - minv) / (maxp - minp);

  return Math.floor(Math.exp(minv + scale * (position - minp)));
};
