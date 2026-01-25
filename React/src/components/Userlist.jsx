import { useEffect, useState } from "react";
import { listarUsers, deletarUser } from "../services/api";

function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    listarUsers().then(res => setUsers(res.data));
  }, []);

  const handleDelete = async (id) => {
    await deletarUser(id);
    setUsers(users.filter(user => user.id !== id));
  };

  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>
          {user.username}
          <button onClick={() => handleDelete(user.id)}>Excluir</button>
        </li>
      ))}
    </ul>
  );
}

export default UserList;
