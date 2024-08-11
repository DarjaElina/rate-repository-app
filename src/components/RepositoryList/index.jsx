import React from 'react';
import useRepositories from '../../hooks/useRepositories';
import { useState } from 'react';
import { useDebounce } from 'use-debounce';
import QueryResult from '../QueryResult';
import RepositoryListContainer from './RepositoryListContainer';

const RepositoryList = () => {
  const [selectedSortingOrder, setSelectedSortingOrder] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [debouncedSearchQuery] = useDebounce(searchQuery, 500);

  

  const sortingOptions = {
    'Latest repositories': { orderBy: 'CREATED_AT', orderDirection: 'DESC' },
    'Highest rated repositories': { orderBy: 'RATING_AVERAGE', orderDirection: 'DESC' },
    'Lowest rated repositories': { orderBy: 'RATING_AVERAGE', orderDirection: 'ASC' }
  };

  const { repositories, loading, error, fetchMore } = useRepositories({
    first: 8,
    orderBy: sortingOptions[selectedSortingOrder]?.orderBy,
    orderDirection: sortingOptions[selectedSortingOrder]?.orderDirection,
    searchKeyword: debouncedSearchQuery
  });

  const onEndReach = () => {
    fetchMore();
  };
  
  return (
    <QueryResult loading={loading} error={error} data={repositories}>
      <RepositoryListContainer
        repositories={repositories}
        selectedSortingOrder={selectedSortingOrder}
        setSelectedSortingOrder={setSelectedSortingOrder}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        onEndReach={onEndReach}
        />
    </QueryResult>
  );
};

export default RepositoryList;