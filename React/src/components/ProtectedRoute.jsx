import { Navigate } from "react-router-dom";

function ProtectedRoute({ children, admin }) {
  const user = JSON.parse(localStorage.getItem("user"));

  if (!user) return <Navigate to="/" />;

  if (admin && !user.is_superuser && !user.is_staff) {
    return <Navigate to="/success" />;
  }

  return children;
}

export default ProtectedRoute;
