import React from "react";
import { useQuery } from "react-query";
import Loading from "../../Sheared/Loading";
import MakeAdminRow from "./MakeAdminRow";

const MakeAdmin = () => {
  const {
    data: users,
    isLoading,
    refetch,
  } = useQuery("users", () =>
    fetch("https://fr-tools-house.onrender.com/user", {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div>
      <h2>Make Admin {users?.length}</h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Email</th>
              <th>Role</th>
            </tr>
          </thead>
          <tbody>
            {users?.map((user, index) => (
              <MakeAdminRow
                key={user._id}
                user={user}
                index={index}
                refetch={refetch}
              ></MakeAdminRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MakeAdmin;
