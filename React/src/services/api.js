import axios from "axios";

const API_URL = "http://127.0.0.1:8000/api/users/";

export const listarUsers = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const deletarUser = async (id) => {
  await axios.delete(`${API_URL}${id}/`);
};

export const atualizarUser = async (id, dados) => {
  const formData = new FormData();

  Object.keys(dados).forEach((key) => {
    if (dados[key]) {
      formData.append(key, dados[key]);
    }
  });

  const response = await axios.put(
    `${API_URL}${id}/`,
    formData
  );

  return response.data;
};