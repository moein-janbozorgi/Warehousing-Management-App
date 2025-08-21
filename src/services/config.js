import axios from "axios";

const api = axios.create({ baseURL: "http://localhost:3000" });

api.interceptors.response.use(
  (response) => response.data,
  (error) => Promise.reject(error)
);

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

const registerUser = async (data) => {
  return await api.post("/auth/register", data);
};

const loginUser = async (data) => {
  return await api.post("/auth/login", data);
};

const getData = async ({ page = 1, limit = 10 }) => {
  return await api.get(`/products?page=${page}&limit=${limit}`);
};

const addProduct = async (data) => {
  return await api.post("/products", data);
};

const editProduct = async ({ id, ...data }) => {
  return await api.put(`/products/${id}`, data);
};

const deleteProduct = async (id) => {
  return await api.delete(`/products/${id}`);
};

export default api;
export {
  registerUser,
  loginUser,
  getData,
  addProduct,
  editProduct,
  deleteProduct,
};
