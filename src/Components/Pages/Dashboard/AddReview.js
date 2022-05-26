import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const AddReview = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log(data);
    const url = `https://whispering-eyrie-39167.herokuapp.com/review`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        alert("user Updated susccessfully");
      });
    navigate("/dashboard");
  };

  return (
    <div className="container">
      <h3 className="text-center text-primary font-bold text-2xl mt-5 mb-5">
        Your Review Well be add on Home page
      </h3>

      <form className=" text-center" onSubmit={handleSubmit(onSubmit)}>
        <input
          className="p-5  mt-5 rounded-xl"
          placeholder="Name"
          {...register("name", { required: true, maxLength: 8 })}
        />{" "}
        <br />
        <input
          className="p-5  mt-5 rounded-xl "
          placeholder="Get Star"
          {...register("star", { required: true, maxLength: 5 })}
        />{" "}
        <br />
        <input
          className="p-5  mt-5 rounded-xl"
          placeholder="Review"
          {...register("review")}
        />{" "}
        <br />
        <input
          className="btn btn-primary  mt-5"
          type="submit"
          value="Add Review"
        />
      </form>
    </div>
  );
};

export default AddReview;
