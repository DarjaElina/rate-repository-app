import React from 'react';
import { FlatList, Pressable } from 'react-native';
import { useNavigate } from 'react-router-native';

import RepositoryItem from '../RepositoryItem';
import CustomPicker from './CustomPicker';
import CustomSearchbar from './CustomSearchbar';
import ItemSeparator from '../ItemSeparator';


export const RepositoryListContainer = ({ repositories, selectedSortingOrder, setSelectedSortingOrder, searchQuery, setSearchQuery, onEndReach }) => {
  const navigate = useNavigate();
  
  const repositoryNodes = repositories
    ? repositories.edges.map((edge) => edge.node)
    : [];

  return (
    <>
      <CustomPicker selectedSortingOrder={selectedSortingOrder}
        setSelectedSortingOrder={setSelectedSortingOrder}
      />
      <FlatList
        data={repositoryNodes}
        ItemSeparatorComponent={ItemSeparator}
        onEndReached={onEndReach}
        onEndReachedThreshold={0.5}
        renderItem={({ item }) => (
          <Pressable onPress={() => navigate(`/repositories/${item.id}`)}>
            <RepositoryItem
            showGitHubButton={false}
            item={item}
            />
          </Pressable>
        )}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={
          <CustomSearchbar searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}/>
        }
      />
    </>
  );
};

export default RepositoryListContainer;