import axios from "axios";

const UrlBase = "http://localhost:8080/duodeal";

const api = axios.create({
  baseURL: UrlBase,
});

export const userApi = {
  
  login: (mail: string, password: string) =>
    api.post("/auth/login", { mail, password }),

 
  logout: () => api.post("/auth/logout"),


  changePassword: (actual: string, nueva: string, token: string) =>
    api.post(
      "/auth/change-password",
      { actual, nueva },
      { headers: { Authorization: `Bearer ${token}` } }
    ),

 
  getUsers: (token: string) =>
    api.get("/users", {
      headers: { Authorization: `Bearer ${token}` },
    }),

  
  getUserById: (id: number, token: string) =>
    api.get(`/users/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    }),

 
  getUserIdByUsername: (username: string, token: string) =>
    api.get(`/users/id-by-username/${username}`, {
      headers: { Authorization: `Bearer ${token}` },
    }),

  
  register: (user: any) => api.post("/users", user),

  updateUser: (id: number, user: any, token: string) =>
    api.put(`/users/${id}`, user, {
      headers: { Authorization: `Bearer ${token}` },
    }),

  deleteUser: (id: number, token: string) =>
    api.delete(`/users/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    }),

  
  getRoles: (token: string) =>
    api.get("/roles", {
      headers: { Authorization: `Bearer ${token}` },
    }),
};