import { INCREMENT_COUNT, DECREMENT_COUNT, DOTS_CLICK } from "./actionType";

export const increment = () => {
  return { type: INCREMENT_COUNT };
};

export const decrement = () => {
  return { type: DECREMENT_COUNT };
};
export const dotClick = (index) => {
  return { type: DOTS_CLICK, payload: Number(index) };
};
