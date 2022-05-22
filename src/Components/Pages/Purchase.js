import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Purchase = () => {
  const { _id } = useParams();
  const [purchase, setPurchase] = useState({});
  console.log(purchase);
  const { img } = purchase;

  useEffect(() => {
    fetch(`http://localhost:5000/tools/${_id}`)
      .then((res) => res.json())
      .then((data) => setPurchase(data));
  }, []);
  return (
    <div>
      <h2>Purchase</h2>
    </div>
  );
};

export default Purchase;
