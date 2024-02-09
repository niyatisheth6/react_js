import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="bg-neutral-500">
      <div className="container px-3 mx-auto">
        <div className="px-3 py-5 flex justify-between items-center">
          <h1 className="text-[30px] font-semibold">Chart js</h1>
          <div className="hidden lg:block">
            <ul className="flex gap-5 text-xl">
              <Link to="/">
                <li>Pie Chart</li>
              </Link>
              <Link to="/doughnut-chart">
                {" "}
                <li>Doughnut Chart</li>
              </Link>
              <Link to="/line-chart">
                {" "}
                <li>Line Chart</li>
              </Link>
              <Link to="/bar-chart">
                {" "}
                <li>Bar Chart</li>
              </Link>
              <Link to="/line-bar-chart">
                {" "}
                <li>Line-bar Chart</li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
