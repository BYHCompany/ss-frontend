const getAllYears = () => {
  const earliestYear = 1890;
  const currentYear = new Date().getFullYear();
  const years = [];
  for (let i = currentYear; i >= earliestYear; i--) {
    years.push(i);
  }
  return years;
};

export const createArrayObjectOfAllYears = (value: string) => {
  const arrayOfYears = getAllYears();

  const createArrayOfObjects = arrayOfYears.map((y) => {
    const data = {
      label: y.toString(),
      id: y.toString(),
      value: value,
    };
    return data;
  });

  return createArrayOfObjects;
};
