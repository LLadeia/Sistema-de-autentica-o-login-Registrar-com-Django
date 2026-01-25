import { useNavigate , Link } from "react-router-dom";
import { criarUser } from "../services/api";
import useForm from "../components/useForm";

function Registrar() {
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    await criarUser(data);
    navigate("/login");
  };

  const {
    values,
    handleChange,
    handleSubmit,
    loading,
  } = useForm(
    { username: "", email: "", password: "" },
    onSubmit
  );

  return (
    <form onSubmit={handleSubmit}>
       <div>
      <h1>Registrar</h1>
      <input name="username" onChange={handleChange} />
      <input name="email" onChange={handleChange} />
      <input type="password" name="password" onChange={handleChange} />

      <button disabled={loading}>Registrar</button>

    <div>
    <Link to="/Home">Ir para Home</Link>
    <Link to="/Login">Ir para Login</Link>
    </div>
    </div>

    </form>
  );

}

export default Registrar;
