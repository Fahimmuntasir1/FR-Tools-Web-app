import React from "react";

const AllOrdersRow = ({ order, index }) => {
  const { userAddress, productName, price, quantity, userEmail, userName } =
    order;
  console.log(order);
  return (
    <tr>
      <th>{index + 1}</th>
      <td>{userName}</td>
      <td>{userEmail}</td>
      <td>{userAddress}</td>
      <td>{productName}</td>
      <td>{price}</td>
      <td>{quantity}</td>
    </tr>
  );
};

export default AllOrdersRow;
