import React, { useEffect, useRef, useState } from "react";

function GenerateRamdomColor() {
  const [color, setcolor] = useState("#CD5C5C");
  const colorRef = useRef();

  const handleColor = () => {
    const randomColor = "#" + Math.random().toString(16).slice(2, 8);
    setcolor(randomColor);
  };

  useEffect(() => {
    colorRef.current.style.backgroundColor = `${color}`;
  }, [color]);
  return (
    <div>
      <div className="colorbox" ref={colorRef}></div>
      <p>Hex ColorCode :{color}</p>
      <button className="btn" onClick={handleColor}>
        Generate Random Color
      </button>
    </div>
  );
}

export default GenerateRamdomColor;
