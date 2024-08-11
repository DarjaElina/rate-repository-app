import { View, StyleSheet } from 'react-native';
import Button from '../Button';
import * as Linking from 'expo-linking';

import RepositoryDetailsList from './RepositoryDetailsList';
import RepositoryHeaderInfo from './RepositoryHeaderInfo';

import theme from '../../theme';

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: theme.colors.backgroundSecondary
  }
})

const RepositoryItem = ({ item, showGitHubButton }) => {
  const { fullName, description, language, stargazersCount, forksCount, ratingAverage, reviewCount, ownerAvatarUrl, url } = item;
  
  const onGitHubButtonPress = () => {
    Linking.openURL(url);
  };

  return (
    <View testID="repositoryItem" style={styles.container}>
      <RepositoryHeaderInfo
        title={fullName}
        description={description}
        language={language}
        imgUrl={ownerAvatarUrl}/>
      <RepositoryDetailsList
        stars={stargazersCount}
        forks={forksCount}
        rating={ratingAverage}
        reviewCount={reviewCount}/>
        {showGitHubButton && <Button title="Open in GitHub" onPress={onGitHubButtonPress}></Button>}
    </View>
  )
};

export default RepositoryItem;