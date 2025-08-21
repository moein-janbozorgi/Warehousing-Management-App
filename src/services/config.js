import axios from "axios";
import { getToken } from "../helpers/helper";

const api = axios.create({ baseURL: "http://localhost:3000" });


api.interceptors.request.use(
  (config) => {
    const token = getToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

api.interceptors.response.use(
  (response) => response.data,
  (error) => Promise.reject(error)
);

const registerUser = async (data) => {
  return await api.post("/auth/register", data);
};

const loginUser = async (data) => {
  return await api.post("/auth/login", data);
};

const getData = async () => {
  return await api.get("/products?page=1&limit=10");
};

export default api;
export { registerUser, loginUser, getData };
