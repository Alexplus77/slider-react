import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { dotClick } from "actions/createAction";

const SliderNavigationDots = () => {
  const { currentIndex, slides } = useSelector((state) => state.changeCount);

  const dispatch = useDispatch();
  return (
    <div className="slider__dots">
      {slides?.map(({ img }, index) => (
        <div
          onClick={() => dispatch(dotClick(index))}
          key={img}
          className={
            currentIndex === index
              ? "slider__dot slider__dot_active"
              : "slider__dot"
          }
        />
      ))}
    </div>
  );
};
export { SliderNavigationDots };
