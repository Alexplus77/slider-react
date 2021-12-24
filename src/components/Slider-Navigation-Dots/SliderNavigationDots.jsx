import React, { useContext } from "react";
import { SliderContext } from "SliderContext";

const SliderNavigationDots = () => {
  const { db, handleClickDot, count } = useContext(SliderContext);
  return (
    <div className="slider__dots">
      {db.map(({ img }, index) => (
        <div
          onClick={() => handleClickDot(index)}
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
