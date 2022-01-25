import {
  HANDLE_INCREMENT_COUNT,
  HANDLE_DECREMENT_COUNT,
  HANDLE_DOTS_CLICK,
  SLIDES_LOAD_FROM_SERVER,
} from "./actionType";

export const increment = () => ({ type: HANDLE_INCREMENT_COUNT });
export const decrement = () => ({ type: HANDLE_DECREMENT_COUNT });
export const dotClick = (index) => ({
  type: HANDLE_DOTS_CLICK,
  payload: Number(index),
});
export const getSlidesFromServer = (db) => ({
  type: SLIDES_LOAD_FROM_SERVER,
  payload: db,
});
