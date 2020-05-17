import { combineReducers } from "redux";
import entityReducer from "./entity_reducer";

const allReducers = combineReducers({
  entity: entityReducer,
});

export default allReducers;
