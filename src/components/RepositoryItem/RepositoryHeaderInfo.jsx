import { View, StyleSheet, Image } from "react-native";
import Text from "../Text";
import theme from "../../theme";

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    flexDirection: 'row',
    gap: 10
  },
  container: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: 5,
    maxWidth: 300,
    padding: 5
  },
  language: {
    backgroundColor: theme.colors.primary,
    padding: 5,
    borderRadius: 5
  },
  img: {
    width: 50,
    height: 50,
    borderRadius: 5
  }
})

const RepositoryHeaderInfo = ({ title, description, imgUrl, language}) => {
  return (
    <View style={styles.wrapper}>
      <Image style={styles.img} source={{ uri: imgUrl }}/>
      <View style={styles.container}>
        <Text fontWeight="bold">{title}</Text>
        <Text>{description}</Text>
        <View style={styles.language}>
          <Text style={{ color: '#fff' }}>
            {language}
          </Text>
        </View>
      </View>
    </View>
  )
};

export default RepositoryHeaderInfo;