import { View, StyleSheet } from "react-native";
import RepositoryDetailsItem from './RepositoryDetailsItem';

const styles = StyleSheet.create({
  container: {
    padding: 5,
    paddingLeft: 15,
    paddingRight: 15,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
})

const RepositoryDetailsList = ({ stars, forks, reviews, rating }) => {
  return (
    <View style={styles.container}>
      <RepositoryDetailsItem number={stars} text="Stars"/>
      <RepositoryDetailsItem number={forks} text="Forks"/>
      <RepositoryDetailsItem number={reviews} text="Reviews"/>
      <RepositoryDetailsItem number={rating} text="Rating"/>
    </View>
  )
};

export default RepositoryDetailsList;