import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "../shared/Header";
import PostHeader from "../shared/PostHeader";
import PostContent from "../shared/PostContent";
import AboutCommunity from "../shared/AboutCommunity";
import FilterByFlair from "../shared/FilterByFlair";
import Rules from "../shared/Rules";
function Raddit() {
  const [myData, setMyData] = useState([]);
  const baseURL = "https://www.reddit.com/r/nextjs.json";
  useEffect(() => {
    axios
      .get(baseURL)
      .then((res) => {
        setMyData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  const dataObj = myData.data?.children;

  return (
    <div>
      <div>
        <Header />
      </div>
      <div className="bg-[#DAE0E6] w-screen h-full">
        <div className="container mx-auto p-5 flex gap-5">
          <div className="max-w-[70%] w-full">
            <h4 className="mb-2">Popular posts</h4>
            <PostHeader />
            {dataObj &&
              dataObj.map((obj, index) => {
                return <PostContent dataObj={obj} key={index} />;
              })}
          </div>
          <div className="max-w-[30%] w-full mt-9 flex flex-col gap-3">
            <AboutCommunity />
            <FilterByFlair />
            <Rules />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Raddit;
