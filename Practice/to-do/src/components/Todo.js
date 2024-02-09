import React, { useCallback, useState } from "react";

import List from "./List";
function Todo(props) {
  const [inputText, setInputText] = useState("");
  return (
 
          <div className="todo">
            <input
              type="text"
              id="item"
              placeholder="Write something here..."
              onChange={(e) => {
                setInputText(e.target.value);
              
              }}
              value={inputText} 
            />
            <button className="btn-primary" onClick={()=>{
                props.addList(inputText)
                setInputText("")
            
            }}>
              add
            </button>
            </div>
      
      
  );
}

export default Todo;
