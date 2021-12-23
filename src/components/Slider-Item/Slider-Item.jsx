import React from "react";
import "App.css";
const SliderItem = ({ img }) => {
  return (
    <div className="slider__item slider__item_active">
      <img className="slider__image" src={img} alt={"..."} />
    </div>
  );
};
export { SliderItem };
