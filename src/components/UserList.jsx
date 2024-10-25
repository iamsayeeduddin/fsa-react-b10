import { useState, useEffect } from "react";

function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users")
      .then((res) => res.json())
      .then((res2) => setUsers(res2));
  }, []);

  return (
    <div>
      {users?.map((usr, idx) => (
        <p key={idx}>{usr.login}</p>
      ))}
    </div>
  );
}

export default UserList;
