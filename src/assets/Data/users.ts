interface user{
    username: string,
    password: string,
    typeuser: string
}

export const users: user[] = [
  { username: "ryoka", password: "1234", typeuser: "Vendedor" },
  { username: "choly", password: "1234", typeuser: "Vendedor" },
  { username: "cliente", password: "1234", typeuser: "Cliente" },
];

export function createUser(newUser: user) {

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

  users.push(newUser);

  return { success: true, message: "Usuario creado exitosamente" };
}

export function login(username:string, password:string) {
  const user = users.find(
    (u) => u.username === username && u.password === password
  );

  if (!username.trim()) {
    return { success: false, message: "El usuario no puede estar vacío" };
  }

  if (!password.trim()) {
    return { success: false, message: "La contraseña no puede estar vacía" };
  }


  if (!user) {
    return { success: false, message: "Credenciales incorrectas" };
  }

  return { success: true, message: "Login exitoso", user };
}

export function closeSesion() {
  localStorage.removeItem("user");
}