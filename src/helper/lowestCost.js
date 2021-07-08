const lowestCost = priceObj => {
  let lowest = Number.MAX_SAFE_INTEGER;

  for (let key in priceObj) {
    if (priceObj[key] != null && priceObj[key] < lowest) lowest = priceObj[key];
  }
  if (lowest === Number.MAX_SAFE_INTEGER) return null;
  else return lowest;
};

export default lowestCost;
