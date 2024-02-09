import React from "react";

const PaginationButton = ({ onclick, title, disable }) => (
  <button className="buton-primary" onClick={onclick} disabled={disable}>
    {title}
  </button>
);
export default PaginationButton;
