import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      {" "}
      <ul>
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/about">
          <li>About</li>
        </Link>
        <Link to="/*">
          <li>Page 404</li>
        </Link>
        <Link to="/user/anil">
          <li>Anil</li>
        </Link>
        <Link to="/user/peter">
          <li>peter</li>
        </Link>
        <Link to="/contact">
          <li>Contact</li>
        </Link>
        <Link to="/login">
          <li>Log in</li>
        </Link>
      </ul>
    </div>
  );
}

export default Home;
