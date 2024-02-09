import React from "react";

const NavigateButton = ({ onclick, title }) => 
  <button className="button" onClick={onclick}>
    {title}
  </button>;
;
export default NavigateButton;
