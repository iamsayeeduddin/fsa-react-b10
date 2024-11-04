/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import UserCard from "./UserCard";

function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users")
      .then((res) => res.json())
      .then((res2) => setUsers(res2));
  }, []);

  return (
    <div className="m-10 flex justify-center items-center gap-10 flex-wrap">
      {users?.map((usr, idx) => (
        <UserCard key={idx} data={usr} />
      ))}
    </div>
  );
}

export default UserList;
