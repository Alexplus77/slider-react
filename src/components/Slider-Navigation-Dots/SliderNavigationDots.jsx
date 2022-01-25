import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { dotClick } from "actions/createAction";

const SliderNavigationDots = () => {
  const { currentIndex, slides } = useSelector((state) => state.sliderReducer);

  const dispatch = useDispatch();
  const handleDotsClick = (index) => {
    dispatch(dotClick(index));
  };
  return (
    <div className="slider__dots">
      {slides?.map(({ img }, index) => (
        <div
          onClick={() => handleDotsClick(index)}
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
