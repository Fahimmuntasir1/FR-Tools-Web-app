import React from "react";

const Tool = ({ tool }) => {
  const { name, img, price, description } = tool;
  return (
    <div class="card  bg-base-100 shadow-xl">
      <figure>
        <img className="w-80" src={img} alt="Shoes" />
      </figure>
      <div class="card-body">
        <h2 class="card-title">{name}</h2>
        <small>
          Price : <span className="text-yellow-500 font-bold">${price}</span>
        </small>
        <small>{description}</small>
        <div class="card-actions justify-end">
          <button class="btn btn-primary">Purchase Now</button>
        </div>
      </div>
    </div>
  );
};

export default Tool;
