import React, { useContext } from "react";
import { SliderItem } from "components/Slider-Item";
import { useSelector } from "react-redux";

const SliderItems = () => {
  const { currentIndex, slides } = useSelector((state) => state.changeCount);

  console.log(currentIndex);
  return (
    <div className="slider__items">
      {slides.map(
        ({ img }, index) =>
          index === currentIndex && <SliderItem key={img} img={img} />
      )}
    </div>
  );
};
export { SliderItems };
