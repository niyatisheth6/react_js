import axios from "axios";
import React, { useEffect, useState } from "react";

function PostAxiosData() {
  const [myTitle, setMyTitle] = useState("");

  const submitForm = (e) => {
   e.preventDefault();
    axios
      .post("https://jsonplaceholder.typicode.com/todos/", {
        title: myTitle,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <form onSubmit={submitForm}>
        <br></br>
        <br></br>
        <label>Enter title</label>
        <input onChange={(e) => setMyTitle(e.target.value)} value={myTitle} />
        <br></br>
        <br></br>
        <input type="submit" value="post"/>
      </form>
    </>
  );
}

export default PostAxiosData;
