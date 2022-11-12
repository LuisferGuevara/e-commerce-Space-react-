const INITIAL_STATE = {
  filter: "planets",
};
const planetsReducer = (state = INITIAL_STATE, action) => {
    
  const trial = {
    all: { ...INITIAL_STATE },
    moons: { ...state, filter: "moonsFilter" },
    planetsFil: { ...state, filter: "planetsFilter" },
  };
  return trial[action.type] || state;
};

export default planetsReducer;
