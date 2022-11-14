import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import adminReducer from "./Admin/admin.reducer";
import authReducer from "./Auth/auth.reducer";
import footerReducer from "./Footer/footer.reducer";
import headerReducer from "./Header/header.reducer";
import planetsReducer from "./Planets/planets.reducer";

const rootReducer = combineReducers({
  auth: authReducer,
  header: headerReducer,
  footer:footerReducer,
  planetsFilter: planetsReducer,
  admin: adminReducer
});

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
