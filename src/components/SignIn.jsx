import * as yup from 'yup';
import { View, TextInput, Pressable, StyleSheet } from 'react-native';
import { useFormik } from 'formik';
import theme from '../theme';

import Text from './Text';

const styles = StyleSheet.create({
  container: {
    padding: 20
  },
  form: {
    backgroundColor: theme.colors.backgroundSecondary,
    padding: 30,
    display: 'flex',
    gap: 10,
  },
  input: {
    padding: 10,
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 5
  },
  inputError: {
    borderColor: theme.colors.error,
  },
  errorText: {
    color: theme.colors.error
  },
  button: {
    padding: 10,
    backgroundColor: theme.colors.primary,
    borderRadius: 5
  }
})

const CInput = ({ error, ...props }) => {
  const inputStyles = [
    styles.input,
    error && styles.inputError
  ];

  return <TextInput style={inputStyles} {...props} />
}

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .required('Username is required'),
  password: yup
    .string()
    .required('Password is required')
})

const initialValues = {
  username: '',
  password: ''
}

const SignInForm = ({ onSubmit }) => {
  const { handleSubmit, handleChange, values, touched, errors } = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  })

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <CInput
          error={touched.username && errors.username}
          placeholder="Username"
          value={values.username}
          onChangeText={handleChange('username')}
        />
        {touched.username && errors.username && (
          <Text style={styles.errorText}>{errors.username}</Text>
        )}
        <CInput
          error={touched.password && errors.password}
          placeholder="Password"
          value={values.password}
          onChangeText={handleChange('password')}
          secureTextEntry
        />
        {touched.password && errors.password && (
          <Text style={styles.errorText}>{errors.password}</Text>
        )}
        <Pressable style={styles.button} onPress={handleSubmit}>
          <Text style={{ color: '#fff', textAlign: 'center' }}>Sign In</Text>
        </Pressable>
      </View>
    </View>
  )
}

const SignIn = () => {

  const onSubmit = (values) => {
    console.log(values);
  };

  return <SignInForm onSubmit={onSubmit}/>
};

export default SignIn;