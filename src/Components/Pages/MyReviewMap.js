import React, { useEffect, useState } from "react";
import MyReviewCard from "./MyReviewCard";

const MyReviewMap = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://fr-tools-house.onrender.com/review")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);
  return (
    <div className="mt-24">
      <h1 className="uppercase text-center text-4xl font-bold text-primary mt-5">
        Review{" "}
      </h1>
      <div className="flex h-1 justify-center my-3 ">
        <div className="  mx-3 bg-slate-400 w-3 card rounded-box place-items-center"></div>
        <div className=" mx-3 bg-slate-400 w-3 card rounded-box place-items-center"></div>
        <div className=" mx-3 bg-slate-400 w-3 card rounded-box place-items-center"></div>
      </div>
      <div className="grid grid-cols-3 gap-5 my-5">
        {users?.map((user) => (
          <MyReviewCard key={user._id} user={user}></MyReviewCard>
        ))}
      </div>
    </div>
  );
};

export default MyReviewMap;
