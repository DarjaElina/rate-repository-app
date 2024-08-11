import { View, StyleSheet } from "react-native";
import Text from "../Text";

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    gap: 5,
  }
})

const RepositoryDetailsItem = ({ number, text }) => {

  const modifyNumber = (number) => {
    if (number >= 1000) {
      return `${(number / 1000).toFixed(1)}k`;
    }

    return number.toString();
  };

  return (
    <View style={styles.container}>
      <Text fontWeight="bold">
        {modifyNumber(number)}
      </Text>
      <Text color="textSecondary">{text}</Text>
    </View>
  )
};

export default RepositoryDetailsItem;