import { useNavigate } from "react-router-dom";
import api from "../services/api";
import useForm from "../components/useForm";

function Form({ route, method }) {
  const navigate = useNavigate();

 const onSubmit = async (data) => {
  const res = await api.post(route, data);

  if (method === "login") {
    const { access, refresh } = res.data;

    localStorage.setItem("ACCESS_TOKEN", access);
    localStorage.setItem("REFRESH_TOKEN", refresh);

    // POR ENQUANTO: todo mundo como user
    localStorage.setItem("USER_ROLE", "user");

    navigate("/");
  }



    if (method === "login") {
      const { access, refresh, user } = res.data;

      localStorage.setItem("ACCESS_TOKEN", access);
      localStorage.setItem("REFRESH_TOKEN", refresh);
      localStorage.setItem("USER_ROLE", user.is_staff ? "admin" : "user");

      if (user.is_staff) {
        navigate("/admin");
      } else {
        navigate("/sucess");
      }
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
      <h1>Login</h1>

      <input
        name="username"
        value={values.username}
        onChange={handleChange}
        placeholder="Username"
        required
      />

      <input
        type="password"
        name="password"
        value={values.password}
        onChange={handleChange}
        placeholder="Password"
        required
      />

      {error && <p>Erro ao enviar</p>}

      <button disabled={loading}>
        {loading ? "Carregando..." : "Entrar"}
      </button>
    </form>
  );
}


export default Form;
