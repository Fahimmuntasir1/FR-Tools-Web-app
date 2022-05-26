import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const AddProducts = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => {
    fetch("https://whispering-eyrie-39167.herokuapp.com/tools", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        toast("User Added Successfully");
      });
  };

  return (
    <div className="">
      <h3 className="text-3xl font-bold text-center text-primary py-3 uppercase">
        Add a Item
      </h3>
      <div className="flex h-1 justify-center my-3 ">
        <div className="  mx-3 bg-slate-400 w-3 card rounded-box place-items-center"></div>
        <div className=" mx-3 bg-slate-400 w-3 card rounded-box place-items-center"></div>
        <div className=" mx-3 bg-slate-400 w-3 card rounded-box place-items-center"></div>
      </div>

      <div className="  w-full max-w-lg m-auto bg-base-100">
        <form className="flex flex-col  " onSubmit={handleSubmit(onSubmit)}>
          <input
            className="p-2 outline-none my-1 focus:border-b-violet-700 border-b-2 rounded-sm"
            placeholder="Name"
            {...register("name", {
              required: {
                value: true,
                message: "Enter your name",
              },
            })}
          />{" "}
          {errors.name?.type === "required" && (
            <span className="text-red-500 text-xs mt-1">
              {errors?.name.message}
            </span>
          )}
          <input
            className="p-2 outline-none my-1 focus:border-b-violet-700 border-b-2 rounded-sm"
            placeholder="Price"
            type="number"
            {...register("price", {
              required: {
                value: true,
                message: "This Field is Required",
              },
            })}
          />{" "}
          {errors.price?.type === "required" && (
            <span className="text-red-500 text-xs mt-1">
              {errors?.price.message}
            </span>
          )}
          <input
            className="p-2 outline-none my-1 focus:border-b-violet-700 border-b-2 rounded-sm"
            placeholder="Available Quantity"
            type="number"
            {...register("availableQuantity", {
              required: {
                value: true,
                message: "This Field is Required",
              },
            })}
          />{" "}
          {errors.availableQuantity?.type === "required" && (
            <span className="text-red-500 text-xs mt-1">
              {errors?.availableQuantity.message}
            </span>
          )}
          <input
            className="p-2 outline-none my-1 focus:border-b-violet-700 border-b-2  rounded-sm"
            placeholder="Minimum Quantity"
            type="number"
            {...register("minimumOrderQuantity", {
              required: {
                value: true,
                message: "This Field is Required",
              },
            })}
          />{" "}
          {errors.minimumOrderQuantity?.type === "required" && (
            <span className="text-red-500 text-xs mt-1">
              {errors?.minimumOrderQuantity.message}
            </span>
          )}
          <textarea
            className="p-2 outline-none my-1 focus:border-b-violet-700 border-b-2 rounded-sm"
            placeholder="Description"
            {...register("description", {
              required: {
                value: true,
                message: "This Field is Required",
              },
            })}
          />{" "}
          {errors.description?.type === "required" && (
            <span className="text-red-500 text-xs mt-1">
              {errors?.description.message}
            </span>
          )}
          <input
            className="p-2 outline-none my-1 focus:border-b-violet-700 border-b-2  rounded-sm"
            placeholder="Image Link"
            type="text"
            {...register("img", {
              required: {
                value: true,
                message: "This Field is Required",
              },
            })}
          />{" "}
          {errors.img?.type === "required" && (
            <span className="text-red-500 text-xs mt-1">
              {errors?.img.message}
            </span>
          )}
          <input
            className="btn btn-primary mt-4"
            type="submit"
            value="Add Item"
          />
        </form>
      </div>
    </div>
  );
};

export default AddProducts;
