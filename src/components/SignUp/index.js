import useSignUp from "../../hooks/useSignUp";
import useSignIn from "../../hooks/useSignIn";
import { useNavigate } from "react-router-native";
import { useState } from "react";

import SignUpForm from "./SignUpForm";

const SignUp = () => {
  const [signUp] = useSignUp();
  const [signIn] = useSignIn();
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState(null);

  const onSubmit = async (values) => {
    const { username, password } = values;
    
    try {
      const data = await signUp({ username, password });
      if (data) {
        await signIn({ username, password});
        navigate('/');
      }
    } catch (error) {
      setErrorMessage(error.message);
      setTimeout(() => {
        setErrorMessage(null);
      }, 5000);
    }
  };

  return <SignUpForm errorMessage={errorMessage} onSubmit={onSubmit}/>;
};

export default SignUp;