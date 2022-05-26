import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import auth from "../../../firebase.init";

const MyProfile = () => {
  const [user] = useAuthState(auth);
  const { displayName, photoURL, email, address, phone, education, linkedin } =
    user;
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
      <h2 className="text-center text-3xl uppercase font-semibold">
        My Profile
      </h2>
      <div>
        <div class=" bg-base-100 shadow-lg my-5 rounded-xl flex justify-around">
          <div>
            <img
              className="w-28 ml-10 rounded-full"
              src={
                photoURL
                  ? photoURL
                  : `https://i.ibb.co/PMQQ6Kz/icon-user-default.png`
              }
              alt="userPhoto"
            />
          </div>
          <div class="card-body">
            <h2 class="card-title">{displayName}</h2>
            {email && <h3>{email}</h3>}
            {address && <h3>Address: {address}</h3>}
            {phone && <h3>Phone: {phone}</h3>}
            {education && <h3>Education: {education}</h3>}
            {linkedin &&<h3>LinkedIn: {linkedin}</h3>}
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-center text-2xl">Update Your Profile</h2>
        <form className="w-1/3 ml-10 my-5" onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Address</span>
            </label>
            <input
              {...register("address", {
                required: {
                  value: true,
                  message: "Address",
                },
              })}
              type="name"
              placeholder="Enter Your Address"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Education</span>
            </label>
            <input
              {...register("education", {
                required: {
                  value: true,
                  message: "Enter your name",
                },
              })}
              type="text"
              placeholder="Education"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Phone Number</span>
            </label>
            <input
              {...register("phone", {
                required: {
                  value: true,
                  message: "Enter your name",
                },
              })}
              type="text"
              placeholder="Phone Number"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">LinkedIn</span>
            </label>
            <input
              {...register("linkedin", {
                required: {
                  value: true,
                  message: "Enter your name",
                },
              })}
              type="text"
              placeholder=" LinkedIn profile link"
              className="input input-bordered"
            />
          </div>

          <div className="form-control mt-3 ">
            <button className="btn btn-accent">Update Profile</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MyProfile;
