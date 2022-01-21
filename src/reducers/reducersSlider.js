import { db } from "db/db";
import {
  INCREMENT_COUNT,
  DOTS_CLICK,
  DECREMENT_COUNT,
} from "actions/actionType";

export const changeCount = (state = 0, action) => {
  switch (action.type) {
    case INCREMENT_COUNT:
      state++;
      state === db.length && (state = 0);
      return state;
    case DECREMENT_COUNT:
      state--;
      state === -1 && (state = db.length - 1);
      return state;
    case DOTS_CLICK:
      state = action.payload;
      return state;
    default:
      return state;
  }
};
