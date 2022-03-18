import { combineReducers } from "redux";
import showPageReducers from "./showPage/ShowPageReducers";
import userReducer from "./fetchUsers/FetchUserReducers";

const RootReducers = combineReducers({
  showPage: showPageReducers,
  users: userReducer,
});

export default RootReducers;
