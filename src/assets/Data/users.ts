interface User {
  userid:number;
  username: string;
  password: string;
  typeuser: string;
}
interface createuser{
  username: string;
  password: string;
  typeuser: string;
}
const defaultUsers: User[] = [
  { userid: 1 ,username: "ryoka", password: "1234", typeuser: "Vendedor" },
  { userid: 2 ,username: "choly", password: "1234", typeuser: "Vendedor" },
  { userid: 3 ,username: "cliente", password: "1234", typeuser: "Cliente" },
];


function getUsers(): User[] {
  const stored = localStorage.getItem("users");
  return stored ? JSON.parse(stored) : defaultUsers;
}

function saveUsers(users: User[]) {
  localStorage.setItem("users", JSON.stringify(users));
}
///funcion para crear un usuario 
export function createUser(newUser: User) {
  const users = getUsers();

  if (!newUser.username.trim()) {
    return { success: false, message: "El usuario no puede estar vacío" };
  }

  if (!newUser.password.trim()) {
    return { success: false, message: "La contraseña no puede estar vacía" };
  }

  if (!newUser.typeuser.trim()) {
    return { success: false, message: "Debe seleccionar un tipo de usuario" };
  }

  const exist = users.find((u) => u.username === newUser.username);
  if (exist) {
    return { success: false, message: "El usuario ya existe" };
  }

 
  const newId =
    users.length > 0 ? Math.max(...users.map(u => u.userid || 0)) + 1 : 1;

  const userWithId = { ...newUser, id: newId };

  const updatedUsers = [...users, userWithId];
  saveUsers(updatedUsers);

  return { success: true, message: "Usuario creado exitosamente" };
}

//-------funcion para logear
export function login(username: string, password: string) {
  const users = getUsers();

  if (!username.trim()) {
    return { success: false, message: "El usuario no puede estar vacío" };
  }

  if (!password.trim()) {
    return { success: false, message: "La contraseña no puede estar vacía" };
  }

  const user = users.find(
    (u) => u.username === username && u.password === password
  );

  if (!user) {
    return { success: false, message: "Credenciales incorrectas" };
  }

  const userData = {
    id: user.userid , 
    username: user.username,
    typeuser: user.typeuser,
  };

  localStorage.setItem("user", JSON.stringify(userData));

  return { success: true, message: "Login exitoso", user: userData };
}
//_------------------------------------
export function getCurrentUser() {
  const stored = localStorage.getItem("user");
  return stored ? JSON.parse(stored) : null;
}
//-------------------------------------
export function closeSesion() {
  localStorage.removeItem("user");
}