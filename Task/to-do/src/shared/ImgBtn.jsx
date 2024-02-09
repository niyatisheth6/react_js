import React from "react";

function ImgBtn({src,handleEvent}) {
  return (
    <>
      <img src={src} onClick={handleEvent}></img>
    </>
  );
}

export default ImgBtn;
