import React from "react";

function CreateCard({ obj }) {
  const {
    id,
    title,
    description,
    price,
    discountPercentage,
    rating,
    stock,
    brand,
    category,
    thumbnail,
  } = obj;
  return (
    <div className="box">
      <div className="card">
        <div>
          <h1 className="title">
            {id} {title}
          </h1>
        </div>
        <div className="card-img">
          <img src={thumbnail} alt="items" />
        </div>
        <div>
          <p className="description">{description}</p>
        </div>
        <div className="card-content">
          <div>
            <h3>price : {price}$</h3>
            <h3>discountPercentage : {discountPercentage}%</h3>
            <h3>rating : {rating}</h3>
          </div>
          <div>
            <h3>stock : {stock}</h3>
            <h3>brand : {brand}</h3>
            <h3>category : {category}</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateCard;
