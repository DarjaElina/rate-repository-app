import * as yup from 'yup';
import { useFormik } from 'formik';
import Input from '../Input';
import Button from '../Button';
import Form from '../Form';
import ErrorText from '../ErrorText';

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

export const SignInForm = ({ onSubmit, errorMessage }) => {
  const { handleSubmit, handleChange, values, touched, errors } = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <Form>
      {errorMessage && <ErrorText message={errorMessage}/>}
      <Input
        autoCapitalize='none'
        error={touched.username && errors.username}
        placeholder="Username"
        value={values.username}
        onChangeText={handleChange('username')}
      />
      {touched.username && errors.username && (
        <ErrorText message={errors.username}/>
      )}
      <Input
        autoCapitalize='none'
        error={touched.password && errors.password}
        placeholder="Password"
        value={values.password}
        onChangeText={handleChange('password')}
        secureTextEntry
      />
      {touched.password && errors.password && (
        <ErrorText message={errors.password}/>
      )}
      <Button title="Sign In" onPress={handleSubmit}/>
    </Form>
  )
};

export default SignInForm;