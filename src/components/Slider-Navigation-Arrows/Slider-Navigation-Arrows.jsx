import React from "react";

import { useDispatch } from "react-redux";
import { decrement, increment } from "actions/createAction";

const SliderNavigationArrows = () => {
  const dispatch = useDispatch();
  const handleIncrement = () => {
    dispatch(increment());
  };
  const handleDecrement = () => {
    dispatch(decrement());
  };
  return (
    <>
      <div className="slider__arrows">
        <div
          onClick={handleDecrement}
          className="slider__arrow slider__arrow_prev"
        >
          &lt;
        </div>
        <div
          onClick={handleIncrement}
          className="slider__arrow slider__arrow_next"
        >
          &gt;
        </div>
      </div>
    </>
  );
};
export { SliderNavigationArrows };
