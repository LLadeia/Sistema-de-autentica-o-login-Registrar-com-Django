import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Registrar from "./pages/Registrar.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import Admin from "./pages/Admin.jsx";
import Sucess from "./pages/Sucess.jsx";
import AdminRoute from "./components/adminroute.jsx";


function Menu() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Registrar" element={<Registrar />} />
      <Route path="/admin" element={ <AdminRoute><Admin /></AdminRoute>}/>
      <Route path="/sucess" element={<Sucess />} />
    </Routes>
  );
}

export default Menu;
