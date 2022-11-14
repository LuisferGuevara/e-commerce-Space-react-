const INITIAL_STATE = {
  filter: [],
  planets: [],
  initialClass: "planet--card planet--card__X",
};
const planetsReducer = (state = INITIAL_STATE, action) => {
  const trial = {
    getPlanets: { ...state, planets: action.payload },
    setFilter: { ...state, filter: action.payload },
    setClass: { ...state, initialClass: action.payload },
  };
  return trial[action.type] || state;
};

export default planetsReducer;
