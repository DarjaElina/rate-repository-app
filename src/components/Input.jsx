import { TextInput, StyleSheet } from "react-native";
import theme from "../theme";

const styles = StyleSheet.create({
  input: {
    padding: 10,
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 5
  },
  inputError: {
    borderColor: theme.colors.error,
  },
})

const Input = ({ error, ...props }) => {
  const inputStyles = [
    styles.input,
    error && styles.inputError
  ];

  return <TextInput style={inputStyles} {...props} />
}

export default Input;