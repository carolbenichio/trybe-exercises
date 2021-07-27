const INITIAL_STATE = {
  percentage: 0,
};

function oceaniaContinent(state = INITIAL_STATE, action) {
  switch (action.type) {
  case 'OCEANIA_ENERGY':
    return { percentage: action.percentage };
  default:
    return state;
  }
}

export default oceaniaContinent;
