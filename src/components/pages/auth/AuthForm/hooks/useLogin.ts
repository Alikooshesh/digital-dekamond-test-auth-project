import { useUser } from "@/hooks/useUser";
import { normalizeIranMobile } from "@/lib/validation";
import { loginRequest } from "@/services/auth/login";
import { User } from "@/types/user";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

type UseLoginProps = {
  onError?: (error: string) => void;
};

export function useLogin({ onError }: UseLoginProps = {}) {
  const router = useRouter();
  const { setUser } = useUser(); 

  const mutation = useMutation({
    mutationFn: async ({ phone }: { phone: string }) => {
      const normalized = normalizeIranMobile(phone);
      return loginRequest(normalized);
    },
    onSuccess: (user: User) => {
      setUser(user); 
      router.push("/dashboard");
    },
    onError: (error) => {
      if (onError) {
        if (error?.message) {
          onError(error.message);
        } else {
          onError("There is a problem.");
        }
      }
    },
  });

  return mutation;
}
