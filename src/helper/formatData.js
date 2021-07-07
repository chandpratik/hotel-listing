const formatData = combinedData => {
  const arrayHashmap = combinedData.reduce((obj, item) => {
    obj[item.id]
      ? (obj[item.id] = { ...obj[item.id], ...item })
      : (obj[item.id] = { ...item });
    return obj;
  }, {});
  return Object.values(arrayHashmap);
};

export default formatData;
