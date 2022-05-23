import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Purchase = () => {
  const { _id } = useParams();
  const [purchase, setPurchase] = useState({});
  console.log(purchase);
  const {
    name,
    img,
    price,
    description,
    availableQuantity,
    minimumOrderQuantity,
  } = purchase;

  useEffect(() => {
    fetch(`http://localhost:5000/tools/${_id}`)
      .then((res) => res.json())
      .then((data) => setPurchase(data));
  }, []);
  return (
    <div className="bg-gray-100">
      <h2 className="text-4xl font-bold text-center text-primary py-3 uppercase">
        Purchase
      </h2>
      <div className="flex h-1 justify-center my-3 ">
        <div className="  mx-3 bg-slate-400 w-3 card rounded-box place-items-center"></div>
        <div className=" mx-3 bg-slate-400 w-3 card rounded-box place-items-center"></div>
        <div className=" mx-3 bg-slate-400 w-3 card rounded-box place-items-center"></div>
      </div>

      <div class="card lg:card-side bg-base-100 shadow-xl">
        <figure>
          <img src={img} alt="Album" />
        </figure>
        <div class="card-body">
          <h2 class="card-title text-2xl">{name}</h2>
          <small className="font-bold">
            Price :{" "}
            <span className="text-yellow-500 font-bold text-xl">${price}</span>{" "}
          </small>
          <p className="font-semibold">
            Available Quantity :{" "}
            <span className="text-xl">{availableQuantity}</span> pcs
          </p>
          <p className="font-semibold">
            Min Order Quantity :{" "}
            <span className="text-xl">{minimumOrderQuantity}</span> pcs
          </p>
          <p>{description}</p>
          <div class="card-actions justify-end">
            <button class="btn btn-primary">Listen</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Purchase;
