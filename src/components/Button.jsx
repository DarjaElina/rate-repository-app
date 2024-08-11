import { Pressable, StyleSheet } from 'react-native';
import Text from './Text';
import theme from '../theme';

const styles = StyleSheet.create({
  button: {
    padding: 10,
    borderRadius: 4,
    backgroundColor: theme.colors.primary,
    margin: 10
  },
  colorSecondary: {
    backgroundColor: "#E52B50"
  }
});

const Button = ({ type, onPress, title }) => {
  const buttonStyle = [
    styles.button,
    type === 'delete' && styles.colorSecondary
  ]
  return (
    <Pressable style={buttonStyle} onPress={onPress}>
      <Text style={{color: '#fff', textAlign: 'center'}}
          fontSize="subheading"
          fontWeight="bold">
        {title}
      </Text>
    </Pressable>
  )
};

export default Button;