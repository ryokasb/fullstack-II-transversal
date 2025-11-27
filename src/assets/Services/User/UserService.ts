import { userApi } from "./UserApi";
import type { AuthResponseDto } from "../../interfaces/UserInterfaces";
import { UserStorage } from "../Storage/UserStorage";

export const userService = {
  login: async (mail: string, password: string): Promise<AuthResponseDto> => {
    try {
      const response = await userApi.login(mail, password);
      return response.data;
    } catch (error: any) {
      throw error.response?.data || "Error en la autenticación";
    }
  },

  logout: () => {
    UserStorage.clearAll();
    return userApi.logout();
  },

  isLoggedIn: () => {
    return !!UserStorage.getToken();
  },

  getToken: () => {
    return UserStorage.getToken();
  },

  getCurrentUsername: () => {
    return UserStorage.getUsername();
  },

  getCurrentRole: () => {
    return UserStorage.getUserRole;
  },

  changePassword: async (actual: string, nueva: string) => {
    const token = UserStorage.getToken();
    return userApi.changePassword(actual, nueva, token!);
  },

  getUsers: async () => {
    const token = UserStorage.getToken();
    return userApi.getUsers(token!);
  },

  getUserById: async (id: number) => {
    const token = UserStorage.getToken();
    return userApi.getUserById(id, token!);
  },

  getUserIdByUsername: async (username: string , token :string) => {
    return userApi.getUserIdByUsername(username, token!);
  },

  register: async (user: any) => {
    return userApi.register(user);
  },

  updateUser: async (id: number, user: any) => {
    const token = UserStorage.getToken();
    return userApi.updateUser(id, user, token!);
  },

  deleteUser: async (id: number) => {
    const token = UserStorage.getToken();
    return userApi.deleteUser(id, token!);
  },

  getRoles: async () => {
    const token = UserStorage.getToken();
    return userApi.getRoles(token!);
  },
};