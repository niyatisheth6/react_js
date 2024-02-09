import React from "react";
import edit from "../images/Edit.svg";
import close from "../images/Delete.svg";
function List(props) {
  return (
    <ul id="to-do-box">
      <li>
        {props.item}{" "}
        <div className="icon">
          <button>
            <img src={edit}></img>
          </button>{" "}
          <button>
            {" "}
            <img src={close}></img>
          </button>
        </div>
      </li>
    </ul>
  );
}

export default List;
