import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import authReducer from "./Auth/auth.reducer";
import headerReducer from "./Header/header.reducer";
import planetsReducer from "./Planets/planets.reducer";

const rootReducer = combineReducers({
    auth: authReducer,
    header: headerReducer,
    planetsFilter: planetsReducer
})

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

export default store;