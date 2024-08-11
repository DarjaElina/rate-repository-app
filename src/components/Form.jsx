import { View, StyleSheet } from "react-native";
import theme from "../theme";

const styles = StyleSheet.create({
  form: {
    backgroundColor: theme.colors.backgroundSecondary,
    padding: 30,
    display: 'flex',
    gap: 10,
    margin: 20
  }
})

const Form = ({children}) => {
  return (
    <View style={styles.form}>{children}</View>
  )
}

export default Form;