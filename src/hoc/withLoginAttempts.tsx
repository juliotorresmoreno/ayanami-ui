
import Loading from "@/components/Loading";
import useFetch from "@/hooks/useFetch";

export function withLoginAttempts<P extends object>(Component: React.ComponentType<P>) {
  const apiURL = process.env.NEXT_PUBLIC_API_URL ?? '';

  const WithLoginAttempts: React.FC<Omit<P, "attempts">> = (props) => {  
    const attempts = useFetch<User>([`${apiURL}/auth/login-attempts`]);

    if (attempts.isLoading) {
      return <Loading />;
    }

    return <Component {...(props as P)} attempts={attempts.data} />;
  } 

  return WithLoginAttempts;
}
