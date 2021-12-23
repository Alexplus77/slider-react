import React, {useContext} from "react";
import {SliderItem} from "../Slider-Item";
import {SliderContext} from "../../SliderContext";

const SliderItems=()=>{
    const {db, count}=useContext(SliderContext)
  return(
      <div className='slider__items'>
          {db.map(({img}, index)=>index===count && <SliderItem  key={img} img={img}/>)}
      </div>
  )
}
export {SliderItems}