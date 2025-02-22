import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000" });

export const fetchAllUsers = () => API.get("/admin/users");
export const deleteUser = (userId) => API.delete(`/admin/users/${userId}`);