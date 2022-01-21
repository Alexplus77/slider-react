import { createStore, combineReducers } from "redux";
import { changeCount } from "reducers/reducersSlider";
import { devToolsEnhancer } from "redux-devtools-extension";
const reducers = combineReducers({
  changeCount: changeCount,
});

const store = createStore(reducers, devToolsEnhancer());
export { store };
