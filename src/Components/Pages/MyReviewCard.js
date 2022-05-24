import React from "react";

const MyReviewCard = ({ user }) => {
  const { name, review, star } = user;
  return (
    <div className="card shadow-lg">
      <div className="card-body items-center text-center">
        <h2 className="text-2xl">{name}</h2>
        <p className="flex">Rating: {star} </p>
        <p> {review}</p>
        <div className="card-actions justify-end"></div>
      </div>
    </div>
  );
};

export default MyReviewCard;
