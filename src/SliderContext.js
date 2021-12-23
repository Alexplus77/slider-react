import React from "react";
import { useState } from "react";
import { db } from "db/db";

const SliderContext = React.createContext("value");

const ContextSlider = (props) => {
  const [count, setCount] = useState(0);

  const handleNextImg = () => {
    setCount(count + 1);
    count === db.length - 1 && setCount(0);
  };
  const handlePrevImg = () => {
    setCount(count - 1);
    count === 0 && setCount(db.length - 1);
  };
  return (
    <SliderContext.Provider value={{ count, handleNextImg, handlePrevImg, db }}>
      {props.children}
    </SliderContext.Provider>
  );
};

export { ContextSlider, SliderContext };