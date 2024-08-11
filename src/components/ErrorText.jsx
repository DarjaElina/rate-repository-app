import Text from './Text';
import { StyleSheet } from 'react-native';
import theme from '../theme';


const styles = StyleSheet.create({
  text: {
    color: theme.colors.error
  }
})

const ErrorText = ({ message }) => {
  return (
    <Text style={styles.text}>{message}</Text>
  )
};

export default ErrorText;