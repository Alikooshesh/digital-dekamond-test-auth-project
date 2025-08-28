import { useSyncExternalStore } from "react";
import { userStore } from "@/stores/userStore";

export function useUser() {
  const user = useSyncExternalStore(userStore.subscribe, userStore.get , () => null);
  return {
    user,
    setUser: userStore.set,
    logout: userStore.logout,
  };
}
