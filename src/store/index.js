import { createStore, combineReducers } from "redux";
import { changeCount } from "reducers/reducersSlider";

const reducers = combineReducers({
  changeCount: changeCount,
});

const store = createStore(reducers);
export { store };
