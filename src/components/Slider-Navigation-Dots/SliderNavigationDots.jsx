import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { dotClick } from "actions/createAction";
import { db } from "db/db";

const SliderNavigationDots = () => {
  const count = useSelector((state) => state.changeCount);
  const dispatch = useDispatch();
  return (
    <div className="slider__dots">
      {db.map(({ img }, index) => (
        <div
          onClick={() => dispatch(dotClick(index))}
          key={img}
          className={
            count === index ? "slider__dot slider__dot_active" : "slider__dot"
          }
        />
      ))}
    </div>
  );
};
export { SliderNavigationDots };
