import axios from "axios";

const API = axios.create({ baseURL: "https://socialmediaapp-backend-nbbq.onrender.com" });

export const fetchAllUsers = () => API.get("/admin/users");
export const deleteUser = (userId) => API.delete(`/admin/users/${userId}`);
