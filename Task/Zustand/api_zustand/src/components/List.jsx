import React from "react";

function List({ user }) {
  return (
    <>
      <div className="card" key={user.id}>
        <h1 className="heading">title</h1>
        <p>{user.title}</p>
        <h1 className="heading">description</h1>
        <p className="description">{user.description}</p>
      </div>
    </>
  );
}

export default List;
