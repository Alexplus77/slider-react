import { SliderItems } from "components/Slider-Items/Slider-Items";
import { SliderNavigation } from "components/Slider-Navigation";
import "App.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getSlidesFromServer } from "./actions/createAction";
import { db } from "db/db";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSlidesFromServer(db));
  }, []);
  return (
    <div className="slider">
      <SliderItems />
      <SliderNavigation />
    </div>
  );
}

export default App;
