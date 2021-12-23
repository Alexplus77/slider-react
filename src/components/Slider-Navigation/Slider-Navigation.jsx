import React, {useContext} from "react";
import {SliderContext} from "../../SliderContext";

const SliderNavigation=()=>{
    const {handlePrevImg, handleNextImg}=useContext(SliderContext)
  return(
        <div className="slider__navigation">
          <div className="slider__arrows">
            <div onClick={handlePrevImg} className="slider__arrow slider__arrow_prev">&lt;</div>
            <div onClick={handleNextImg} className="slider__arrow slider__arrow_next">&gt;</div>
          </div>
          </div>
  )
}

export {SliderNavigation}

