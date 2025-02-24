
import Loading from "@/components/Loading";
import useFetch from "@/hooks/useFetch";

export function withProfile<P extends object>(Component: React.ComponentType<P>) {
  const apiURL = process.env.NEXT_PUBLIC_API_URL ?? '';

  const WithProfile: React.FC<Omit<P, "profile">> = (props) => {  
    const profile = useFetch<User>([`${apiURL}/profile`]);

    if (profile.isLoading) {
      return <Loading />;
    }

    return <Component {...(props as P)} profile={profile.data} />;
  } 

  return WithProfile;
}
