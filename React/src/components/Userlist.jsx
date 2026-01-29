import { useEffect, useState } from "react";
import { listarUsers, deletarUser } from "../services/api";
import "../styles/userlist.css";

function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    carregarUsers();
  }, []);

  const carregarUsers = async () => {
    try {
      setLoading(true);
      const res = await listarUsers();
      setUsers(res.data);
    } catch (err) {
      setError("Erro ao carregar usuários");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (user) => {
    const confirmar = window.confirm(
      `Tem certeza que deseja excluir o usuário "${user.username}"?`
    );

    if (!confirmar) return;

    try {
      await deletarUser(user.id);
      setUsers(users.filter(u => u.id !== user.id));
    } catch (err) {
      alert("Erro ao deletar usuário");
    }
  };

  if (loading) return <p>Carregando usuários...</p>;
  if (error) return <p>{error}</p>;

  return (
    <table className="user-table">
      <thead>
        <tr>
          <th>Usuário</th>
          <th>Email</th>
          <th>Tipo</th>
          <th>Ações</th>
        </tr>
      </thead>

      <tbody>
        {users.map(user => (
          <tr key={user.id}>
            <td>{user.username}</td>
            <td>{user.email}</td>
            <td>
              {user.is_superuser || user.is_staff ? "Admin" : "Usuário"}
            </td>
            <td>
              <button
                onClick={() => handleDelete(user)}
                disabled={user.is_superuser}
              >
                Excluir
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default UserList;
