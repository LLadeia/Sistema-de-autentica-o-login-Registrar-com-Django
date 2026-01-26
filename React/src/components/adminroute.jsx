import { Navigate } from "react-router-dom";

function AdminRoute({ children }) {
  const role = localStorage.getItem("USER_ROLE");

  if (role !== "admin") {
    return <Navigate to="/login" />;
  }

  return children;
}

export default AdminRoute;
