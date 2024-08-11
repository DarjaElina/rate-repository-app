import * as yup from 'yup';
import { useFormik } from "formik";
import Form from "../Form";
import Input from "../Input";
import Button from "../Button";
import ErrorText from "../ErrorText";

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .required('Username is required')
    .min(5)
    .max(30),
  password: yup
    .string()
    .required('Password is required')
    .min(5)
    .max(30),
  passwordConfirm: yup
    .string()
    .required('Password confirm is required')
    .oneOf([yup.ref('password'), null], "Passwords don't match")
});

const initialValues = {
  username: '',
  password: '',
  passwordConfirm: ''
};

const SignUpForm = ({ onSubmit, errorMessage }) => {
  const { values, handleChange, handleSubmit, touched, errors } = useFormik({
    initialValues,
    validationSchema,
    onSubmit
  });

  return (
    <Form>
      {errorMessage && <ErrorText message={errorMessage}/>}
      <Input
        error={touched.username && errors.username}
        autoCapitalize='none'
        placeholder="Username"
        value={values.username}
        name="username"
        onChangeText={handleChange('username')}
      />
      {touched.username && errors.username && (
        <ErrorText message={errors.username}/>
      )}
      <Input
        error={touched.password && errors.password}
        autoCapitalize='none'
        placeholder="Password"
        value={values.password}
        name="password"
        onChangeText={handleChange('password')}
        secureTextEntry
      />
      {touched.password && errors.password && (
        <ErrorText message={errors.password}/>
      )}
      <Input
        error={touched.passwordConfirm && errors.passwordConfirm}
        autoCapitalize='none'
        placeholder="Confirm password"
        value={values.passwordConfirm}
        name="passwordConfirm"
        onChangeText={handleChange('passwordConfirm')}
        secureTextEntry
      />
      {touched.passwordConfirm && errors.passwordConfirm && (
        <ErrorText message={errors.passwordConfirm}/>
      )}
      <Button title="Sign Up" onPress={handleSubmit} />
    </Form>
  )
};

export default SignUpForm;