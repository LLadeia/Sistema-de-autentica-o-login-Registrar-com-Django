import UserList from "../components/Userlist";
import { Link, useNavigate } from "react-router-dom";
function Admin() {
  return (
    <div>
      <h1>Admin</h1>
      <UserList />
      <div>
        <Link to="/">Ir para Home</Link>
        </div>
    </div>
  );
}

export default Admin;
