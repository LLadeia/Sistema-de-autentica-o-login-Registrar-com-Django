import Form from "../components/Form.jsx"
import { Link } from "react-router-dom";

function Login() {
    return <Form route="/api/token/" method="login" />

}

export default Login