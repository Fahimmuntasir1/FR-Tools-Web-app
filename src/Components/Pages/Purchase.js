import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase.init";

const Purchase = () => {
  const [user] = useAuthState(auth);
  const { id } = useParams();
  const [purchase, setPurchase] = useState({});
  const {
    _id,
    name,
    img,
    price,
    description,
    availableQuantity,
    minimumOrderQuantity,
  } = purchase;

  const [updateQuantity, setUpdateQuantity] = useState(0);
  const navigate = useNavigate();

  const handlePurchaseProduct = (e) => {
    e.preventDefault();
    const quantity = e.target.quantity.value;

    if (quantity < minimumOrderQuantity) {
      return toast.error(
        "quantity can't be smaller then minimum Order Quantity"
      );
    }
    if (quantity > availableQuantity) {
      return toast.error("quantity can't be bigger then available quantity");
    }

    const updatedQuantity = availableQuantity - quantity;

    const update = { updatedQuantity };
    fetch(`https://fr-tools-house.onrender.com/update/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(update),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          setUpdateQuantity(updateQuantity + 1);
        }
      });

    const purchasedInfo = {
      productId: _id,
      productName: name,
      price,
      quantity: e.target.quantity.value,
      userEmail: user.email,
      userName: user.displayName,
      userPhone: e.target.phone.value,
      userAddress: e.target.address.value,
    };

    fetch(" https://fr-tools-house.onrender.com/order", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(purchasedInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("Order confirmed");
        navigate("/");
      });
  };

  useEffect(() => {
    fetch(`https://fr-tools-house.onrender.com/tools/${id}`)
      .then((res) => res.json())
      .then((data) => setPurchase(data));
  }, []);
  return (
    <div className="my-5">
      <h2 className="text-4xl font-bold text-center text-primary py-3 uppercase">
        Purchase
      </h2>
      <div className="flex h-1 justify-center my-3 ">
        <div className="  mx-3 bg-slate-400 w-3 card rounded-box place-items-center"></div>
        <div className=" mx-3 bg-slate-400 w-3 card rounded-box place-items-center"></div>
        <div className=" mx-3 bg-slate-400 w-3 card rounded-box place-items-center"></div>
      </div>

      <div className=" lg:flex lg:justify-between bg-base-100 ">
        <div className="w-1/3">
          <img src={img} alt="Album" />
        </div>
        <div className="card-body w-2/3">
          <h2 className="card-title text-2xl">{name}</h2>
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
        </div>
      </div>
      <div className=" w-1/3 mx-auto">
        <form
          onSubmit={handlePurchaseProduct}
          className="grid grid-cols-1 gap-4 justify-items-center w-full"
        >
          <input
            type="text"
            name="name"
            disabled
            value={user?.displayName || "Hero Alom"}
            className="input input-bordered w-full "
          />
          <input
            type="email"
            name="email"
            disabled
            value={user?.email || ""}
            className="input input-bordered w-full "
          />
          <input
            required
            type="text"
            name="address"
            placeholder="Your address here"
            className="input input-bordered w-full"
          />
          <input
            required
            type="number"
            name="phone"
            placeholder="Enter phone here"
            className="input input-bordered w-full "
          />
          <input
            required
            type="number"
            name="quantity"
            placeholder="Add Quantity (pcs)"
            className="input input-bordered w-full "
          />
          <input
            type="submit"
            value="Purchase Now"
            className="btn btn-accent w-full "
          />
        </form>
      </div>
    </div>
  );
};

export default Purchase;
