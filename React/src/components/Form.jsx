import { useNavigate } from "react-router-dom";
import api from "../services/api";
import useForm from "../components/useForm";

function Form({ route, method }) {
  const navigate = useNavigate();
    navigate("success");

  const onSubmit = async (data) => {
    const res = await api.post(route, data);

    if (method === "login") {
      localStorage.setItem("ACCESS_TOKEN", res.data.access);
      localStorage.setItem("REFRESH_TOKEN", res.data.refresh);
      navigate("/");
    } else {
      navigate("/login");
    }
  };

  const {
    values,
    loading,
    error,
    handleChange,
    handleSubmit,
  } = useForm(
    { username: "", password: "" },
    onSubmit
  );

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <h1>{method === "login" ? "Login" : "Register"}</h1>

      <input
        name="username"
        value={values.username}
        onChange={handleChange}
        placeholder="Username"
      />

      <input
        type="password"
        name="password"
        value={values.password}
        onChange={handleChange}
        placeholder="Password"
      />

      {error && <p>Erro ao enviar</p>}
      <button disabled={loading}>
        {loading ? "Carregando..." : "Enviar"}
      </button>
    </form>
  );
}

export default Form;
