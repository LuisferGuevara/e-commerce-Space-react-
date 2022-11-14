const INITIAL_STATE = {
  filter: [],
};
const planetsReducer = (state = INITIAL_STATE, action) => {

  const trial = {
    setFilter: {...state, filter:action.payload}
  };
  return trial[action.type] || state;
};

export default planetsReducer;
