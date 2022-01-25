import {
  HANDLE_INCREMENT_COUNT,
  HANDLE_DECREMENT_COUNT,
  HANDLE_DOTS_CLICK,
  SLIDES_LOAD_FROM_SERVER,
} from "actions/actionType";

const initialState = {
  slides: [],
  currentIndex: 0,
  error: null,
};

export const sliderReducer = (state = initialState, action) => {
  switch (action.type) {
    case SLIDES_LOAD_FROM_SERVER:
      return { ...state, slides: action.payload };
    case HANDLE_INCREMENT_COUNT:
      state.currentIndex === state.slides.length - 1 &&
        (state.currentIndex = -1);
      return { ...state, currentIndex: state.currentIndex + 1 };
    case HANDLE_DECREMENT_COUNT:
      state.currentIndex === 0 && (state.currentIndex = state.slides.length);
      return { ...state, currentIndex: state.currentIndex - 1 };
    case HANDLE_DOTS_CLICK:
      return { ...state, currentIndex: action.payload };
    default:
      return state;
  }
};
