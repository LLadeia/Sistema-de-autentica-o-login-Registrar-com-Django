import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home.jsx";
import Login from "./components/Login.jsx";

function Menu() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default Menu;
