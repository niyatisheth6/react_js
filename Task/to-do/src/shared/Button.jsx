import React from "react";

function Button({title,duplicate}) {
  return (
    <>
      <button type="submit" className="btn_primary mx-2" disabled={duplicate}>
        {title}
      </button>
    </>
  );
}

export default Button;
