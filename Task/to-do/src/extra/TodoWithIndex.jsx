import React, { useState } from "react";
import close from "../img/Delete.svg";
// import close from "../img/Close.svg";

import edit from "../img/Edit.svg";
export default function TodoWithIndex() {
  const [currentData, setCurrentData] = useState("");
  const [dataArray, setDataArray] = useState([]);
  const [newindex, setIndex] = useState("");
  const [editData, setEditData] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setCurrentData("");
  }
  function removeEle(i) {
    //one way to delete particular currentData
    // const newList = dataArray.filter((_, index) => index != i);

    //another way to delete particular currentData
    const newData = dataArray.splice(i, 1);
    if (!dataArray.includes(newData)) {
      setDataArray([...dataArray]);
    }
  }
  function addList() {
    setEditData(false);
    if (currentData.length > 0) {
      if (!dataArray.includes(currentData)) {
        setDataArray([...dataArray, currentData]);
      }
    }
  }
  function editEle(index, currentData) {
    setCurrentData(currentData);
    setIndex(index);
    setEditData(true);
  }
  function editList() {
    dataArray.splice(newindex, 1, currentData);
    setEditData(false);
    setCurrentData("");
  }

  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="bg-slate-600 text-[50px] text-center font-semibold w-full">
        To-do list using index
      </h1>
      <div className="card">
        <form onSubmit={handleSubmit}>
          <div className="flex">
            <input
              type="text"
              placeholder="Write Something here..."
              className="form_input"
              onChange={(e) => setCurrentData(e.target.value)}
              value={currentData}
            ></input>
            {editData ? (
              <button className="btn_primary mx-2" onClick={() => editList()}>
                edit
              </button>
            ) : null}
            <button className="btn_primary" onClick={() => addList()}>
              Add
            </button>
          </div>
        </form>

        <div className="overflow-auto">
          <ul>
            {dataArray.map((item, index) => (
              <li key={index}>
                <span>{item}</span>
                <div className="flex gap-2">
                  <img src={edit} onClick={() => editEle(index, item)}></img>
                  <img src={close} onClick={() => removeEle(index)}></img>
                 
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
