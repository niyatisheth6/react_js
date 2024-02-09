import React from "react";

export default function FunctionTableList() {
  const student = [
    { name: "anil", email: "anil@gmail.com", contact: 111 },
    { name: "ram", email: "ram@gmail.com", contact: 222 },
    { name: "smit", email: "smit@gmail.com", contact: 333 },
    { name: "prit", email: "prit@gmail.com", contact: 444 },
  ];
  return (
    <div>
      <h1>Create table using Array of object</h1>
      <div className="table-content">
        <table border="1">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Contact</th>
            </tr>
          </thead>
          <tbody>
            {student.map((ele, i) => (
              <tr key={i}>
                <td>{ele.name}</td>
                <td>{ele.email}</td>
                <td>{ele.contact}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
