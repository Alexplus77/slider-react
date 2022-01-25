import { createStore, combineReducers } from "redux";
import { sliderReducer } from "reducers/reducersSlider";
import { devToolsEnhancer } from "redux-devtools-extension";
const reducers = combineReducers({
  sliderReducer: sliderReducer,
});

const store = createStore(reducers, devToolsEnhancer());
export { store };
