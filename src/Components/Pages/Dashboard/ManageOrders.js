import React, { useEffect, useState } from "react";
import AllOrdersRow from "./AllOrdersRow";

const ManageOrders = () => {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    fetch("https://whispering-eyrie-39167.herokuapp.com/orders")
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);
  return (
    <div>
      <h2>Manage All Orders: {orders.length}</h2>
      <div class="overflow-x-auto">
        <table class="table table-compact w-full">
          <thead>
            <tr>
              <th>no</th>
              <th>Username</th>
              <th>Email</th>
              <th>Address</th>
              <th>Product</th>
              <th>price</th>
              <th>Quantity</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <AllOrdersRow
                key={order._id}
                order={order}
                index={index}
              ></AllOrdersRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageOrders;
