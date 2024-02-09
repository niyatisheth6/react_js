import React from "react";
import DisplayTitle from "../shared_components/DisplayTitle";
import Button from "../shared_components/Button";
import DisplayCounter from "../shared_components/DisplayCounter";

export default function Counter({card_num,initial}) {
  return (
   <div className="card">
     <DisplayTitle title={card_num} />
      <Button initial={initial}/>
   </div>
  );
}
