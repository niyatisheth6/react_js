import React, { useState } from "react";
import Input from "./Input";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import cardPostApi from "../api/cardPostApi";

function ModalForm() {
  const [item, setItem] = useState({});

  const navigate = useNavigate(null);
  function productList(e) {
    e.preventDefault();
    handleChange("thumbnail", "");
    handleChange("images", []);
    mutate(item);
  }
  function handleChange(key, value) {
    item[key] = value;
    setItem(item);
  }

  function postData(data) {
    return cardPostApi(data);
  }

  const { mutate } = useMutation((value) => postData(value), {
    onSuccess: () => {
      navigate("/");
    },
    onError: (err) => {
      console.log(err);
      navigate("/");
    },
  });
  return (
    <div className="form-box">
      <div className="form-card">
        <h1 className="title">Products - form</h1>
        <form onSubmit={productList}>
          <div className="product-form">
            <Input
              type="text"
              title="Title"
              onchange={(e) => handleChange("title", e.target.value)}
            />
            <Input
              type="text"
              title="Description"
              onchange={(e) => handleChange("description", e.target.value)}
            />
            <Input
              type="text"
              title="Price"
              onchange={(e) => handleChange("price", e.target.value)}
            />
            <Input
              type="text"
              title="DiscountPercentage"
              onchange={(e) =>
                handleChange("discountPercentage", e.target.value)
              }
            />
            <Input
              type="text"
              title="Rating"
              onchange={(e) => handleChange("rating", e.target.value)}
            />
            <Input
              type="text"
              title="Stock"
              onchange={(e) => handleChange("stock", e.target.value)}
            />
            <Input
              type="text"
              title="Brand"
              onchange={(e) => handleChange("brand", e.target.value)}
            />
            <Input
              type="text"
              title="Category"
              onchange={(e) => handleChange("category", e.target.value)}
            />

            <div className="submit-button">
              <button type="submit" className="button">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ModalForm;
