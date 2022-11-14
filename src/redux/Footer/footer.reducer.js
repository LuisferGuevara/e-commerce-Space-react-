const INITIAL_STATE = {
    showClass: "welcome_footer",
  };
  
  const footerReducer = (state = INITIAL_STATE, action) => {
      
    const trial = {
      setClass: { ...state, showClass: "footer__menu" },
      original: { ...INITIAL_STATE },
    };
    return trial[action.type] || state;
  };
  
  export default footerReducer;
  