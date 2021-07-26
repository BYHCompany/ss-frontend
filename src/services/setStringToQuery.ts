export const setStringToQuery = (params: any) => {
  const cloneParam = { ...params };
  const queryString = Object.keys(cloneParam)
    .map((key) => {
      return key + '=' + encodeURI(cloneParam[key]);
    })
    .join('&');

  return queryString;
};
