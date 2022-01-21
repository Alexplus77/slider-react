import React, { useContext } from "react";
import { SliderItem } from "components/Slider-Item";
import { useSelector } from "react-redux";
import { db } from "db/db";

const SliderItems = () => {
  const count = useSelector((state) => state.changeCount);

  return (
    <div className="slider__items">
      {db.map(
        ({ img }, index) =>
          index === count && <SliderItem key={img} img={img} />
      )}
    </div>
  );
};
export { SliderItems };
