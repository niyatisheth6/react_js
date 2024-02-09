import React from "react";

function AboutCommunity() {
  return (
   <div>
      <h2 className="p-2 bg-gray-800 text-white font-semibold w-full">
        About Community
      </h2>
      <div className="bg-white p-2">
        <h3>Next.js is the React framework for production by Vercel.</h3>
        <span className="text-sm text-gray-500 inline-block pb-3">
          Created Oct 25, 2016
        </span>
        <hr />
        <div className="flex gap-5 my-2">
          <div>
            <span className="text-2xl">24.6k</span>
            <h6 className="text-sm">members</h6>
          </div>
          <div>
            <span className="text-2xl">73</span>
            <h6 className="text-sm">Online</h6>
          </div>
        </div>
      </div>
      </div>
  );
}

export default AboutCommunity;
