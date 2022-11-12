const INITIAL_STATE = {
  user: null,
  token: null,
  error: false,
};
const authReducer = (state = INITIAL_STATE, action) => {
    
  const trial = {
    login_user_ok: { ...state, user: action.payload?.dbUser, token: action.payload?.token },
    login_user_error: { ...state, error: action.payload },
    register_user_ok: { ...state, user: action.payload },
    register_user_error: { ...state, error: action.payload },
    logout_user_ok: { ...INITIAL_STATE },
    logout_user_error: { ...state, error: action.payload },
    user_checksession: { ...state, token: action.payload },
  };
  return trial[action.type] || state;
};

export default authReducer;
