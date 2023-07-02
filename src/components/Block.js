import React, { useState } from "react";

const Block = () => {
  let randomColor = () => {
    return Math.floor(Math.random() * 255);
  };

  const [color, setColor] = useState([
    randomColor(),
    randomColor(),
    randomColor(),
  ]);

  setInterval(() => {
    setColor([randomColor(), randomColor(), randomColor()]);
  }, 500);
  return (
    <div className="container">
      <div
        className="block"
        style={{
          backgroundColor: `rgb(${color[0]}, ${color[1]}, ${color[2]})`,
        }}
      ></div>
      <h3>
        <span>color: </span>
        {color}
      </h3>
    </div>
  );
};

export default Block;
