import { View, StyleSheet } from 'react-native';

import RepositoryDetailsList from './RepositoryDetailsList';
import RepositoryHeaderInfo from './RepositoryHeaderInfo';

import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: theme.colors.backgroundSecondary
  }
})

const RepositoryItem = ({ fullName, description, language, stars, forks, rating, reviews, imgUrl }) => {
  return (
    <View style={styles.container}>
      <RepositoryHeaderInfo
        title={fullName}
        description={description}
        language={language}
        imgUrl={imgUrl}/>
      <RepositoryDetailsList
        stars={stars}
        forks={forks}
        rating={rating}
        reviews={reviews}/>
    </View>
  )
};

export default RepositoryItem;