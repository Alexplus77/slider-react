import React from "react";

import { useDispatch } from "react-redux";
import { decrement, increment } from "actions/createAction";

const SliderNavigationArrows = () => {
  const dispatch = useDispatch();
  return (
    <>
      <div className="slider__arrows">
        <div
          onClick={() => dispatch(decrement())}
          className="slider__arrow slider__arrow_prev"
        >
          &lt;
        </div>
        <div
          onClick={() => dispatch(increment())}
          className="slider__arrow slider__arrow_next"
        >
          &gt;
        </div>
      </div>
    </>
  );
};
export { SliderNavigationArrows };
