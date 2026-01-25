import { useParams, useNavigate } from "react-router-dom";
import { atualizarUser } from "../services/api";
import { useState } from "react";

function Editar() {
  const { id } = useParams();
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await atualizarUser(id, { username });
    navigate("/admin");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input onChange={e => setUsername(e.target.value)} />
      <button>Salvar</button>
    </form>
  );
}

export default Editar;
