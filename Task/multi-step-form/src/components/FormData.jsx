import React from "react";
import useGetData from "../hooks/useGetData";
import { useNavigate } from "react-router-dom";

function FormData() {
  const navigate = useNavigate();
  const { data } = useGetData();

  const handleCreate = () => {
    navigate("/");
  };
  return (
    <div>
      <div className="container my-5 mx-auto">
        <h1 className="heading mb-5">User Details</h1>
        <div className="flex justify-end my-10">
          <button className="btn-secondary" onClick={handleCreate}>
            Create NewUser
          </button>
        </div>
        <table className="w-full">
          <thead>
            <tr>
              <th>Id</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>City</th>
              <th>Country</th>
              <th>Pincode</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data.map((value) => {
                return (
                  <tr key={value.id}>
                    <td>{value.id}</td>
                    <td>{value.firstname}</td>
                    <td>{value.lastname}</td>
                    <td>{value.email}</td>
                    <td>{value.city}</td>
                    <td>{value.country}</td>
                    <td>{value.pincode}</td>
                    <td>
                      <button className="btn-secondary">Edit</button>
                    </td>
                    <td>
                      <button className="btn-secondary">Delete</button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default FormData;
