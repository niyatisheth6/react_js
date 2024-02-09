import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router";

function Create() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const navigate = useNavigate();
  function submitForm(e) {
    e.preventDefault();
    axios
      .post("https://64a3a3c9c3b509573b565930.mockapi.io/crud", {
        name,
        email,
        age,
      })
      .then(() => navigate("/"))
      .catch((err) => {
        console.log(err);
      });
  }
  return (
    <>
      <div className="flex justify-center items-center w-screen h-screen bg-gray-500">
        <div className="w-[500px] bg-black rounded-2xl p-5">
          <h1 className="text-4xl my-2 text-white">Add data</h1>
          <form onSubmit={submitForm}>
            <div className="flex flex-col gap-[16px] mb-[32px] lg:mb-[28px] xl:mb-[32px]">
              <input
                type="text"
                placeholder="Your Name"
                className="form-control"
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="text"
                placeholder="Enter Email"
                className="form-control"
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="text"
                placeholder="Enter age"
                className="form-control"
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

export default Create;
