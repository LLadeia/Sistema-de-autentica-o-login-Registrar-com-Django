import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Página Home</h1>
      <Link to="/login">Ir para Login</Link>
      /
        <Link to="/Registrar">Ir para Registrar</Link>
    </div>
  );
}

export default Home;
