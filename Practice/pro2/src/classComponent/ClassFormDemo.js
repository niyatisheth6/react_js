import { getValue } from "@testing-library/user-event/dist/utils";
import React from "react";
import { Component } from "react";
class ClassFormDemo extends Component {
 
  render() {
  
    function getValue(e) {
      console.log(e.target.value);
    }
    return (
      <div>
        <h2>ClassFormDemo</h2>
        <h3> Get input value Using onClick in console</h3>
        <div>
          <label>Enter value</label>
          <input
            type="text"
            placeholder="Enter Value"
            onChange={getValue}
          ></input>
         
        </div>
      </div>
    );
  }
}

export default ClassFormDemo;
