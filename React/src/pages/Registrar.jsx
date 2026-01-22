import { Link } from "react-router-dom";
import {  listarUsers, deletarUser } from "../services/api";
import Form from "../components/Form.jsx"


function Registrar() {
  return (
    <div>
      <h1>Página Registrar</h1>

      <div className="Registrar">
        <input type="text" placeholder="Usuário" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Senha" />
        <button type="submit">Registrar</button>
        </div>
      <Link to="/">Ir para Home</Link>
      <Link to="/login">Ir para Login</Link>
    </div>
  );
}

export default Registrar;
