import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Read() {
  const [aipData, setApiData] = useState([]);
  function getData() {
    axios
      .get("https://64a3a3c9c3b509573b565930.mockapi.io/crud")
      .then((res) => {
        setApiData(res.data);
      });
  }
  useEffect(() => {
    getData();
  }, []);
  function handleDelete(id) {
    axios
      .delete(`https://64a3a3c9c3b509573b565930.mockapi.io/crud/${id}`)
      .then(() => {
        getData();
      });
  }

  function handleEdit(name, age, email,id) {
    localStorage.setItem("id",id)
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
    localStorage.setItem("age", age);
    
  }
  return (
    <div className="flex  justify-center items-center h-screen w-screen bg-slate-500">
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg ">
        <Link to="/create">
          <button className="px-6 py-3 bg-white mb-2 flex justify-end">
            Add Data
          </button>
        </Link>
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-2xl text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Id
              </th>
              <th scope="col" className="px-6 py-3">
                NAME
              </th>
              <th scope="col" className="px-6 py-3">
                EMAIL
              </th>
              <th scope="col" className="px-6 py-3">
                AGE
              </th>
              <th scope="col" className="px-6 py-3">
                EDIT
              </th>
              <th scope="col" className="px-6 py-3">
                DELETE
              </th>
            </tr>
          </thead>
          <tbody>
            {aipData.map((item) => {
              return (
                <React.Fragment key={item.id}>
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <td className="px-6 py-4">{item.id}</td>
                    <th
                      scope="row"
                      className="px-6 py-4 font-xl text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {item.name}
                    </th>
                    <td className="px-6 py-4">{item.email}</td>
                    <td className="px-6 py-4">{item.age}</td>

                    <td className="px-6 py-4 text-right">
                    <Link to="/update">
                      <button
                        onClick={() =>
                          handleEdit(item.name, item.age, item.email, item.id)
                        }
                        className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                      >
                        Edit
                      </button>
                      </Link>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button
                        onClick={() => handleDelete(item.id)}
                        className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                </React.Fragment>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Read;
