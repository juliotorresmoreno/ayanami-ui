
import Loading from "@/components/Loading";
import useFetch from "@/hooks/useFetch";

export function withBasicInfo<P extends object>(Component: React.ComponentType<P>) {
  return function WithBasicInfo(props: P) {
    const apiURL = process.env.NEXT_PUBLIC_API_URL;
    const profile = useFetch<User>([`${apiURL}/profile`]);

    if (profile.isLoading) {
      return <Loading />;
    }

    return <Component {...props} profile={profile.data} />;
  }
}
