import React, { useState } from "react";
import closeBtn from "../img/CloseBtn.svg";
import { COMPLETED, DOING, PENDING } from "../helper/constant";
import Button from "../shared/Button";
import ImgBtn from "../shared/ImgBtn";
import DisplayTodo from "../shared/DisplayTodo";
import Title from "../shared/Title";

export default function TodoWithId() {
  const [data, setData] = useState("");
  const [newId, setnewId] = useState("");
  const [dataArray, setDataArray] = useState([]);
  const [isDuplicate, setIsDuplicate] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  function handleForm(e) {
    e.preventDefault();
    setData("");
    if (isEdit) {
      editList();
      return;
    }
    addList();
  }

  function addList() {
    if (data.length > 0) {
      setDataArray([
        ...dataArray,
        { id: new Date().getTime(), value: data, status: "pending" },
      ]);
    }
  }

  function removeEle(id) {
    const newList = dataArray.filter((item) => item.id !== id);
    setDataArray(newList);
  }

  function editEle(val, id) {
    setData(val);
    setnewId(id);
    setIsEdit(true);
  }

  function editList() {
    if (data.length > 0) {
      const item = dataArray.find((item) => {
        if (item.id === newId) {
          return item;
        }
        return false;
      });
      if (item) {
        item.value = data;

        setIsEdit(false);
      }
    }
  }

  function checkDup(e) {
    if (dataArray.length > 0) {
      const duplicate = dataArray.find((item) => item.value === e.target.value);
      setIsDuplicate(duplicate ? true : false);
    }
    setData(e.target.value);
  }

  function closeEle() {
    setIsDuplicate(false);
    setIsEdit(false);
    setData("");
  }

  function selectStatus(e, id) {
    const newList = dataArray.map((item) => {
      if (item.id === id) {
        item.status = e.target.value;
      }
      return item;
    });
    setDataArray(newList);
  }

  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="bg-slate-600 text-[50px] text-center font-semibold w-full">
        To-do list using Id and add status
      </h1>
      <div className="card">
        <form onSubmit={handleForm}>
          <div className="flex">
            <input
              type="text"
              placeholder="Write Something here..."
              className="form_input"
              value={data}
              onChange={(e) => checkDup(e)}
            />
            {isDuplicate ? (
              <div className="relative">
                <div className="close">
                  <ImgBtn src={closeBtn} handleEvent={() => closeEle()} />
                </div>
              </div>
            ) : null}
            {isEdit ? (
              <Button title="Edit" duplicate={isDuplicate} />
            ) : (
              <Button title="Add" duplicate={isDuplicate} />
            )}
          </div>
        </form>
        {isDuplicate ? <h1>Data is Duplicate</h1> : null}

        <div className="overflow-auto">
          <ul>
            {dataArray.length > 0 ? (
              <>
                <DisplayTodo
                  title="Pending:"
                  dataArray={dataArray}
                  status={PENDING}
                  handleEditEle={editEle}
                  handleRemoveEle={removeEle}
                  handleStatus={selectStatus}
                />
                <DisplayTodo
                  title="Doing:"
                  dataArray={dataArray}
                  status={DOING}
                  handleEditEle={editEle}
                  handleRemoveEle={removeEle}
                  handleStatus={selectStatus}
                />
                <DisplayTodo
                  title="Completed:"
                  dataArray={dataArray}
                  status={COMPLETED}
                  handleEditEle={editEle}
                  handleRemoveEle={removeEle}
                  handleStatus={selectStatus}
                />
              </>
            ) : (
              <Title title="No Data Found" />
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}
