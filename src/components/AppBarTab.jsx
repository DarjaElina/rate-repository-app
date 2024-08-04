import { View, StyleSheet, Pressable } from "react-native";
import Text from "./Text";

const styles = StyleSheet.create({
  container: {
    padding: 5
  }
})

const AppBarTab = ({ text }) => {
  return (
    <View style={styles.container}>
      <Pressable>
        <Text
          style={{color: '#fff'}} fontSize="subheading" fontWeight="bold">
            {text}
        </Text>
      </Pressable>
    </View>
  )
};

export default AppBarTab;