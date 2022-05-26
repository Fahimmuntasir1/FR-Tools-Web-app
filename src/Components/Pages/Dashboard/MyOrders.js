import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../../firebase.init";

const MyOrders = () => {
  const [user] = useAuthState(auth);
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    const email = user?.email;
    fetch(
      `https://whispering-eyrie-39167.herokuapp.com/myOrders?email=${email}`,
      {
        method: "GET",
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setOrders(data);
        console.log(data);
      });
  }, [user]);
  const handleOrderCancel = (id) => {
    const proceed = window.confirm("Delete product from your orders?");
    if (proceed) {
      fetch(`https://whispering-eyrie-39167.herokuapp.com/MyOrders/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);

          const remaining = orders.filter((order) => order._id !== id);
          setOrders(remaining);
        });
    }
  };
  return (
    <div>
      <h1>This is order: {orders.length}</h1>
      <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Product Name</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Payment</th>
              <th>Cancel Order</th>
            </tr>
          </thead>
          <tbody>
            {orders?.map((order, index) => (
              <tr key={order._id}>
                <th>{index + 1}</th>
                <td>{order.productName}</td>
                <td>{order.quantity}</td>
                <td className="font-semibold">${order.price}</td>
                <td>
                  {order.price && !order.paid && (
                    <Link to={`/dashboard/payment/${order._id}`}>
                      <button className="btn btn-xs btn-success">pay</button>
                    </Link>
                  )}
                  {order.price && order.paid && (
                    <div>
                      <p>
                        <span className="text-success">Paid</span>
                      </p>
                      <p>
                        Transaction id:{" "}
                        <span className="text-success">
                          {order.transactionId}
                        </span>
                      </p>
                    </div>
                  )}
                </td>
                <td>
                  <button
                    onClick={() => handleOrderCancel(order._id)}
                    className="btn btn-red-500 btn-xs"
                  >
                    Cancel
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrders;
