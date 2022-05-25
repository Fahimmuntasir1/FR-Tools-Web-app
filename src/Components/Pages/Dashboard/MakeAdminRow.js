import React from "react";

const MakeAdminRow = ({ user,index }) => {
  const { email } = user;
  return (
    <tr>
      <th>{index+1}</th>
      <td>{email}</td>
      <td>
        <button class="btn btn-sm btn-secondary text-white">Make Admin</button>
      </td>
      <td>
        <button class="btn btn-sm btn-secondary text-white">Make Admin</button>
      </td>
    </tr>
  );
};

export default MakeAdminRow;
