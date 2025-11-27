export interface UsuarioStorage {
  id: string;
  username: string;
  token: string;
  role: string;
}

const USER_KEY = "usuario";

export const UserStorage = {
  // --- Guardar todo el usuario ---
  setUser: (user: UsuarioStorage) => {
    localStorage.setItem(USER_KEY, JSON.stringify(user));
  },

  // --- Obtener usuario completo ---
  getUser: (): UsuarioStorage | null => {
    const data = localStorage.getItem(USER_KEY);
    return data ? JSON.parse(data) : null;
  },

  // --- Obtener propiedades individuales ---
  getUserId: (): string | null => {
    const user = UserStorage.getUser();
    return user?.id || null;
  },

  getUsername: (): string | null => {
    const user = UserStorage.getUser();
    return user?.username || null;
  },

  getToken: (): string | null => {
    const user = UserStorage.getUser();
    return user?.token || null;
  },

  getUserRole: (): string | null => {
    const user = UserStorage.getUser();
    return user?.role || null;
  },

  // --- Limpiar usuario ---
  clearAll: () => {
    localStorage.removeItem(USER_KEY);
  }
};