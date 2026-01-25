import axios from "axios";

const api = axios.create({
  baseURL: "http://127.0.0.1:8000",
});

// CRUD USERS
export const listarUsers = () => api.get("/api/users/");
export const criarUser = (data) => api.post("/api/users/", data);
export const atualizarUser = (id, data) => api.put(`/api/users/${id}/`, data);
export const deletarUser = (id) => api.delete(`/api/users/${id}/`);

export default api;
