import { useQuery } from "@apollo/client";
import { ME } from "../graphql/queries";

const useAuthUser = () => {
  const { data, error, loading } = useQuery(ME);

  return {
    user: data ? data.me : null,
    loading,
    error
  }
};

export default useAuthUser;