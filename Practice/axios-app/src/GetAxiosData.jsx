import Axios from "axios";
import React, { useEffect, useState } from "react";

function GetAxiosData() {
  const [myData, setMyData] = useState([]);
  // only for one data
  // const baseURL = "https://jsonplaceholder.typicode.com/todos/1"

  //for multiple data
  const baseURL = "https://jsonplaceholder.typicode.com/todos/";
  useEffect(() => {
    Axios.get(baseURL).then((res) => setMyData(res.data));
  }, []);

  
  return (
    <>
      <h1>Fetch data using get method in axios</h1>
      <div className="grid ">
        {/* only for one data
            <h1>{myData.title}</h1>
            <h1>{myData.userId}</h1> */}

        {myData.map((data) => {
          const { id, title } = data;
          return (
            <div key={id} className="data">
              <h1>id: {id}</h1>
              <h1>title: {title.slice(0,5).toUpperCase()}</h1>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default GetAxiosData;
