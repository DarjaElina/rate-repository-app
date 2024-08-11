import { useQuery } from "@apollo/client";
import { GET_CURRENT_USER } from "../graphql/queries";

const useAuthUser = (includeReviews = false) => {
  const { data, error, loading } = useQuery(GET_CURRENT_USER, {
    variables: { includeReviews }
  });

  return {
    user: data ? data.me : null,
    loading,
    error
  }
};

export default useAuthUser;