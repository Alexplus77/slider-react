import { db } from "db/db";
import {
  INCREMENT_COUNT,
  DOTS_CLICK,
  DECREMENT_COUNT,
} from "actions/actionType";

const initialState = {
  slides: db,
  currentIndex: 0,
  error: null,
};

export const changeCount = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT_COUNT:
      state.currentIndex++;
      state.currentIndex === state.slides.length && (state.currentIndex = 0);
      return state;
    case DECREMENT_COUNT:
      state.currentIndex--;
      state.currentIndex === -1 && (state.currentIndex = db.length - 1);
      return state;
    case DOTS_CLICK:
      state.currentIndex = action.payload;
      return state;
    default:
      return state;
  }
};
