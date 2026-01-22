import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Registrar from "./pages/Registrar.jsx";

function Menu() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/registrar" element={<Registrar />} />
    </Routes>
  );
}

export default Menu;
