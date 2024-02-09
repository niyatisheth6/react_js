import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";

function Update() {
  const [id, setId] = useState(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    setId(localStorage.getItem("id"));
    setName(localStorage.getItem("name"));
    setEmail(localStorage.getItem("email"));
    setAge(localStorage.getItem("age"));
  }, []);
  function updateForm(e) {
    e.preventDefault();
    axios
      .put(`https://64a3a3c9c3b509573b565930.mockapi.io/crud/${id}`, {
        name,
        email,
        age,
      })
      .then(() => {
        navigate("/");
      });
  }
  return (
    <>
      <div className="flex justify-center items-center w-screen h-screen bg-gray-500">
        <div className="w-[500px] bg-black rounded-2xl p-5">
          <h1 className="text-4xl my-2 text-white">Update data</h1>
          <form onSubmit={updateForm}>
            <div className="flex flex-col gap-[16px] mb-[32px] lg:mb-[28px] xl:mb-[32px]">
              <input
                type="text"
                placeholder="Your Name"
                className="form-control"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="text"
                placeholder="Enter Email"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="text"
                placeholder="Enter age"
                className="form-control"
                value={age}
                onChange={(e) => setAge(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="btn-secondary text-[16px] mb-[32px] lg:mb-[28px] xl:mb-[32px] py-2 px-5 bg-white"
            >
              SUBMIT
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Update;
