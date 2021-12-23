import React from "react";

const SliderItem=({img})=>{
    return(
        <div className="slider__item slider__item_active">
            <img src={img} alt={'...'}/>
            </div>
    )
}
export {SliderItem}