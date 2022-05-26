import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../../../firebase.init";

const MyProfile = () => {
  const [user] = useAuthState(auth);
  console.log(user);
  const { displayName, photoURL, email } = user;

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = {
      address: e.target.address.value,
      phone: e.target.phone.value,
      education: e.target.education.value,
      linkedin: e.target.linkedin.value,
    };

    fetch(`https://whispering-eyrie-39167.herokuapp.com/user/${email}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("user updated");
      });
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
            {/* {address && <h3>Address: {address}</h3>}
            {phone && <h3>Phone: {phone}</h3>}
            {education && <h3>Education: {education}</h3>}
            {linkedin && <h3>LinkedIn: {linkedin}</h3>} */}
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-center text-2xl">Update Your Profile</h2>
        <form onSubmit={handleSubmit} className="w-1/3 ml-10 my-5">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Address</span>
            </label>
            <input
              required
              name="address"
              type="text"
              placeholder="Enter Your Address"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Education</span>
            </label>
            <input
              required
              name="education"
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
              required
              name="phone"
              type="number"
              placeholder="Phone Number"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">LinkedIn</span>
            </label>
            <input
              required
              name="linkedin"
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
