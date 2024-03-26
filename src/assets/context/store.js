import { create } from "zustand";

export const useStore = create((set) => ({
  token: localStorage.getItem("token") ?? null,
  user: localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : null,
  setToken: (token) => set({ token }),
  setUser: (user) => {
    localStorage.setItem("user", JSON.stringify(user));
    set({ user });
  },
  logout: () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("userId");
    localStorage.removeItem("name");
    localStorage.removeItem("correo");
    localStorage.removeItem("usuario");
    window.location.reload();
    set({
      token: null,
      user: null,
      correo: new Set(),
      userId: new Set(),
      name: new Set(),
      usuario: new Set(),
    });
  },
}));
