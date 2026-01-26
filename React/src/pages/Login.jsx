import Form from "./components/Form.jsx";
import { Link } from "react-router-dom";

function Login() {

  return (
  <div>
  <Form route="/api/token/" method="login" />

  
  <div>
  <Link to="/">Ir para Home</Link>
  <Link to="/Registrar">Ir para Registrar</Link>
  </div>
  </div>
  );
   }
export default Login;
