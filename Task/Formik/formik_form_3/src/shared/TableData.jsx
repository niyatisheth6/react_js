import React, { memo } from "react";

function TableData({ item, onclick }) {
  console.log("Table Data");
  return (
    <div className="table-data h-full my-9">
      <div className="flex flex-col ">
        <h1 className="heading">Data</h1>
        <div className="flex justify-end mb-3">
          <button className="btn-primary !bg-[#ff99cc]  w-fit" onClick={onclick}>
            + Add Data
          </button>
        </div>
      </div>
      <table className="table-container">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Date Of Birth</th>
            <th>Gender</th>
            <th>Item</th>
            <th>Additional information</th>
          </tr>
        </thead>
        <tbody>
          {item &&
            item.map((data, index) => {
              var event = new Date(data.startDate);
              let date = JSON.stringify(event);
              date = date.slice(1, 11);
              return (
                <tr key={index}>
                  <td>{data.firstName}</td>
                  <td>{data.lastName}</td>
                  <td>{data.email}</td>
                  <td>{data.phone}</td>
                  <td>{date}</td>
                  <td>{data.gender}</td>
                  <td>{data.items}</td>
                  <td>{data.additionalInfo}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}

export default memo(TableData);
