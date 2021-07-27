const INITIAL_STATE = {
  percentage: 0,
};

function europeContinent(state = INITIAL_STATE, action) {
  switch (action.type) {
  case 'EUROPE_ENERGY':
    return { percentage: action.percentage };
  default:
    return state;
  }
}

export default europeContinent;
