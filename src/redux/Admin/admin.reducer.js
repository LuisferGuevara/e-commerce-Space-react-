const INITIAL_STATE = {
  name: "",
  image: "",
  description: "",
  planet: {},
  error: "",
};

const adminReducer = (state = INITIAL_STATE, action) => {
  const trial = {
    createPlanet__ok: {
      ...state,
      name: action.payload?.name,
      image: action.payload?.image,
      description: action.payload?.description,
    },
    createPlanet__error: { ...state, error: action.payload },
    gettingPlanet: {...INITIAL_STATE},
    setPlanet: { ...state, planet:action.payload},
    modifiedPlanet: { ...state, planet:action.payload},
  };
  return trial[action.type] || state;
};

export default adminReducer;
