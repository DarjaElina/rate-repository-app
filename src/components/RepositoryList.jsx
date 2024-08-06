import { FlatList, View, StyleSheet } from 'react-native';
import Text from './Text';
import useRepositories from '../hooks/useRepositories';

import RepositoryItem from './RepositoryItem';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

export const RepositoryListContainer = ({ repositories }) => {
  const repositoryNodes = repositories
    ? repositories.edges.map((edge) => edge.node)
    : [];

  return (
    <FlatList
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item }) => (
        <RepositoryItem
          fullName={item.fullName}
          description={item.description}
          language={item.language}
          forks={item.forksCount}
          stars={item.stargazersCount}
          rating={item.ratingAverage}
          reviews={item.reviewCount}
          imgUrl={item.ownerAvatarUrl}
        />
      )}
      keyExtractor={(item) => item.id}
    />
  );
};

const RepositoryList = () => {
  const { repositories, loading } = useRepositories();
  if (loading) {
    return <Text>Loading repositories...</Text>
  }


  return <RepositoryListContainer repositories={repositories} />;
};

export default RepositoryList;