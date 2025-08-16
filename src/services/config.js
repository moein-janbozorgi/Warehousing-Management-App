import axios from "axios";

const api = axios.create({ baseURL: "http://localhost:3000" });

api.interceptors.response.use(
  (response) => response.data,
  (error) => Promise.reject(error)
);

const registerUser = async (data) => {
  const res = await api.post("/auth/register",data);
  return res;
};

const loginUser = async (data) => {
  return await api.post("/auth/login", data);
};

export default api;
export { registerUser, loginUser };
