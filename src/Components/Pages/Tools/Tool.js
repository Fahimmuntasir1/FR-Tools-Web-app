import React from "react";
import { Link } from "react-router-dom";

const Tool = ({ tool }) => {
  const {
    _id,
    name,
    img,
    price,
    description,
    availableQuantity,
    minimumOrderQuantity,
  } = tool;
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure>
        <img className="w-72" src={img} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <small>
          Price : <span className="text-yellow-500 font-bold">${price}</span>
        </small>
        <div className="font-semibold">
          <small>Available Quantity : {availableQuantity} pcs</small>
          <br />
          <small>Min Order Quantity : {minimumOrderQuantity} pcs</small>
        </div>
        <small>{description}</small>
        <div className="card-actions justify-end mb-0">
          <Link to={`/purchase/${_id}`}>
            <button className="btn btn-primary text-white">Purchase Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Tool;
