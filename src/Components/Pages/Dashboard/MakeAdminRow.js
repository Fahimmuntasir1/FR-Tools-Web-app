import React from "react";
import { toast } from "react-toastify";

const MakeAdminRow = ({ user, index, refetch }) => {
  const { email, role } = user;
  const makeAdmin = () => {
    fetch(`https://whispering-eyrie-39167.herokuapp.com/user/admin/${email}`, {
      method: "PUT",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => {
        if (res.status === 403) {
          toast.error("You are not authorized to do this");
        }
        return res.json();
      })
      .then((data) => {
        if (data.modifiedCount > 0) {
          refetch();
          toast.success("User added as Admin");
        }
      });
  };
  return (
    <tr>
      <th>{index + 1}</th>
      <td>{email}</td>
      <td>
        {role !== "admin" && (
          <button
            onClick={makeAdmin}
            className="btn btn-sm btn-secondary text-white"
          >
            Make Admin
          </button>
        )}
        {role === "admin" && (
          <button disabled className="uppercase mx-5">
            Admin
          </button>
        )}
      </td>
    </tr>
  );
};

export default MakeAdminRow;
