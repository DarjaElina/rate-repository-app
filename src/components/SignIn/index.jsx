import useSignIn from '../../hooks/useSignIn';
import { useNavigate } from 'react-router-native';
import { useState } from 'react'

import SignInForm from './SignInForm';

const SignIn = () => {
  const [signIn] = useSignIn();
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState(null);

  const onSubmit = async (values) => {
    const { username, password } = values;

    try {
      await signIn({ username, password });
      navigate('/');
    } catch (error) {
      setErrorMessage(error.message);
      setTimeout(() => {
        setErrorMessage(null);
      }, 5000);
    }
  };

  return <SignInForm errorMessage={errorMessage} onSubmit={onSubmit}/>;
};

export default SignIn;