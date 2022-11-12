const INITIAL_STATE = {
  displayClass: "welcome_header",
};

const headerReducer = (state = INITIAL_STATE, action) => {
    
  const trial = {
    setClass: { ...state, displayClass: "header" },
    original: { ...INITIAL_STATE },
  };
  return trial[action.type] || state;
};

export default headerReducer;
