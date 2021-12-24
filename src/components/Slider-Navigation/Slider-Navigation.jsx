import { SliderNavigationArrows } from "components/Slider-Navigation-Arrows";
import { SliderNavigationDots } from "components/Slider-Navigation-Dots";

const SliderNavigation = () => {
  return (
    <div className="slider__navigation">
      <SliderNavigationArrows />
      <SliderNavigationDots />
    </div>
  );
};

export { SliderNavigation };
