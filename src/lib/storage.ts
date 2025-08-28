import { User } from "@/types/user";

const KEYS = {
  AUTH_USER: "auth:user",
};
export function saveUser(user: User) {
  if (typeof window === "undefined") return;
  localStorage.setItem(KEYS.AUTH_USER, JSON.stringify(user));
}
export function getUser(): User | null {
  if (typeof window === "undefined") return null;
  const raw = localStorage.getItem(KEYS.AUTH_USER);
  try {
    return raw ? (JSON.parse(raw) as User) : null;
  } catch {
    return null;
  }
}
export function clearUser() {
  if (typeof window === "undefined") return;
  localStorage.removeItem(KEYS.AUTH_USER);
}
