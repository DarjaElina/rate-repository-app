import { View, StyleSheet } from "react-native";
import Text from "./Text";
import { Link } from 'react-router-native';

const styles = StyleSheet.create({
  container: {
    padding: 5
  }
})

const AppBarTab = ({ url, text }) => {
  return (
    <View style={styles.container}>
      <Link to={url}>
        <Text
          style={{color: '#fff'}}
          fontSize="subheading"
          fontWeight="bold">
            {text}
        </Text>
      </Link>
    </View>
  )
};

export default AppBarTab;