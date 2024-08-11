import * as yup from 'yup';
import { useFormik } from "formik";
import Input from "../Input";
import Form from '../Form';
import ErrorText from '../ErrorText';
import Button from '../Button';

const initialValues = {
  repositoryName: '',
  ownerName: '',
  rating: '',
  text: '',
}

const validationSchema = yup.object().shape({
  ownerName: yup
    .string()
    .required('Owner name is required'),
  repositoryName: yup
    .string()
    .required('Repository name is required'),
  rating: yup
    .number()
    .integer()
    .required('Rating is required')
    .min(0, 'Rating must be a number between 0 and 100')
    .max(100, 'Rating must be a number between 0 and 100'),
  text: yup
    .string()
})

const ReviewForm = ({ onSubmit, errorMessage }) => {
  const { handleSubmit, handleChange, values, touched, errors } = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return <Form>
    {errorMessage && <ErrorText message={errorMessage}/>}
    <Input
      autoCapitalize='none'
      placeholder="Repository owner name"
      value={values.ownerName}
      onChangeText={handleChange('ownerName')}
      error={touched.ownerName && errors.ownerName}
    />
    {touched.ownerName && errors.ownerName && (
      <ErrorText message={errors.ownerName}/>
    )}
    <Input
      autoCapitalize='none'
      placeholder="Repository name"
      value={values.repositoryName}
      onChangeText={handleChange('repositoryName')}
      error={touched.repositoryName && errors.repositoryName}
    />
    {touched.repositoryName && errors.repositoryName && (
      <ErrorText message={errors.repositoryName}/>
    )}
    <Input
      autoCapitalize='none'
      placeholder="Rating between 0 and 100"
      value={values.rating}
      onChangeText={handleChange('rating')}
      error={touched.rating && errors.rating}
    />
    {touched.rating && errors.rating && (
      <ErrorText message={errors.rating}/>
    )}
    <Input
      multiline
      autoCapitalize='none'
      placeholder="Review"
      value={values.text}
      onChangeText={handleChange('text')}
    />
    <Button title="Create a review" onPress={handleSubmit}/>
  </Form>
};

export default ReviewForm;