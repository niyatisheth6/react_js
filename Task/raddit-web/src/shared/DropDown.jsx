import React from "react";

function DropDown({ title1, image1, image2, title2 }) {
  return (
    <>
      <button className=" btn-secondary">
        {title2}
        {image1}
        {image2}
        {title1}
      </button>
    </>
  );
}

export default DropDown;
