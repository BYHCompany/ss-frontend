const getAllEngineVolume = () => {
  const startVolume = 2;
  const endVolume = 100;
  const years = [];

  for (let i = startVolume; i <= endVolume; i += 2) {
    years.push(i / 10);
  }
  return years;
};

export const createArrayOfVolumes = (key: string) => {
  const arrayOfYears = getAllEngineVolume();

  const createArrayOfObjects = arrayOfYears.map((y) => {
    const data = {
      label: y.toString(),
      id: y.toString(),
      value: key,
    };
    return data;
  });

  return createArrayOfObjects;
};
