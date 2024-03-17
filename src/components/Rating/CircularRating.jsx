import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
// import "./rating.css";

const CircularRating = ({ rating }) => {
  return (
    <div className="circleRating bg-black/45 rounded-[50%] h-[50px] w-[50px] sm:h-[60px] sm:w-[60px] ">
      <CircularProgressbar
        value={rating}
        maxValue={10}
        text={rating}
        styles={buildStyles({
          pathColor: rating < 5 ? "red" : rating < 7 ? "orange" : "green",
          textColor: "white",
        })}
      />
    </div>
  );
};

export default CircularRating;
