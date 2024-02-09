import React from "react";
import ImgBtn from "./ImgBtn";
import deleteBtn from "../img/Delete.svg";
import editBtn from "../img/Edit.svg";
import { COMPLETED, DOING, PENDING } from "../helper/constant";
import Title from "./Title";

function DisplayTodo({
  handleStatus,
  handleRemoveEle,
  handleEditEle,
  dataArray,
  status,
  title,
}) {
  const setStatus = [PENDING, DOING, COMPLETED];

  return (
    <>
      <Title title={title} />
      {dataArray
        .filter((item) => {
          if (item.status === status) {
            return item;
          }
          return false;
        })
        .map((item) => (
          <li key={item.id}>
            <span>{item.value}</span>
            <div className="flex gap-2">
              <ImgBtn
                src={editBtn}
                handleEvent={() => handleEditEle(item.value, item.id)}
              />
              <ImgBtn
                src={deleteBtn}
                handleEvent={() => handleRemoveEle(item.id)}
              />

              <select
                value={item.status}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-2"
                onChange={(e) => handleStatus(e, item.id)}
              >
                {setStatus.map((status) => (
                  <option key={status} value={status}>
                    {status}
                  </option>
                ))}
              </select>
            </div>
          </li>
        ))}
    </>
  );
}

export default DisplayTodo;

