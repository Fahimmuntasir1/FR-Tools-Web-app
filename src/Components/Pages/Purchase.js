import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Purchase = () => {
  const { _id } = useParams();
  const { purchases, setPurchases } = useState({});

  useEffect(()=> {
      fetch(``)
  },[])
  return (
    <div>
      <h2>Purchase</h2>
    </div>
  );
};

export default Purchase;
