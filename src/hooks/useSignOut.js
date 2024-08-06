import { useApolloClient } from "@apollo/client";
import useAuthStorage from "./useAuthStorage";
import { useNavigate } from "react-router-native";

const useSignOut = () => {
  const apolloClient = useApolloClient();
  const authStorage = useAuthStorage();
  const navigate = useNavigate();

  const signOut = () => {
    authStorage.removeAccessToken();
    apolloClient.resetStore();
    navigate("/signIn");
  }

  return { signOut };
};

export default useSignOut;