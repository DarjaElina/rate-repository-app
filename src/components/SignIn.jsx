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
  button: {
    padding: 10,
    backgroundColor: theme.colors.primary,
    borderRadius: 5
  }
})

const initialValues = {
  username: '',
  password: ''
}

const onSubmit = (values) => {
  console.log(values);
}

const SignIn = () => {

  const formik = useFormik({
    initialValues,
    onSubmit
  })

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Username"
          value={formik.values.username}
          onChangeText={formik.handleChange('username')}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={formik.values.password}
          onChangeText={formik.handleChange('password')}
        />
        <Pressable style={styles.button} onPress={formik.handleSubmit}>
          <Text style={{ color: '#fff', textAlign: 'center' }}>Sign In</Text>
        </Pressable>
      </View>
    </View>
  )
};

export default SignIn;