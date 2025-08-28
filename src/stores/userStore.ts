import { User } from "@/types/user";
import { getUser, saveUser, clearUser } from "@/lib/storage";

type Subscriber = (user: User | null) => void;

let user: User | null = getUser();
const subscribers = new Set<Subscriber>();

function notify() {
  subscribers.forEach((cb) => cb(user));
}

if (typeof window !== "undefined") {
  window.addEventListener("storage", (event) => {
    if (event.key === "auth:user") {
      user = getUser();
      notify();
    }
  });
};



export const userStore = {
  get: () => user,
  set: (newUser: User | null) => {
    user = newUser;
    if (newUser) saveUser(newUser);
    else clearUser();
    notify();
  },
  subscribe: (cb: Subscriber) => {
    subscribers.add(cb);
    return () => subscribers.delete(cb);
  },
  logout: () => userStore.set(null),
};
