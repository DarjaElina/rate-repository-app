import { Pressable, StyleSheet } from 'react-native';
import Text from './Text';
import theme from '../theme';

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    borderRadius: 4,
    backgroundColor: theme.colors.primary,
  }
});

const Button = ({ onPress, title }) => {
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={{color: '#fff'}}
          fontSize="subheading"
          fontWeight="bold">
        {title}
      </Text>
    </Pressable>
  )
};

export default Button;