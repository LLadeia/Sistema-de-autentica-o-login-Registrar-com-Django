import { Link } from "react-router-dom";
import { listarUsers, deletarUser, atualizarUser  } from "../services/api";

function listarUsers() {
  const [users, setUsers] = useState([]);
  const [editandoId, setEditandoId] = useState(null);

  function carregar() {
    listarUsers().then(setUsers);
  }

  useEffect(() => {
    carregar();
  }, []);

  async function handDelete(id) {
    await deletarUser(id);
    carregar();
  }
}
function atualizarUser() {
  return (
    <div>
      <h1>Página Admin</h1>

      <div className="Admin">
        <input type="text" placeholder="Usuário" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Senha" />
        <button type="submit">EditarUser</button>
        </div>
      <Link to="/">Ir para Home</Link>
      <Link to="/login">Ir para Login</Link>
    </div>
  );
}

export default listarUsers;
