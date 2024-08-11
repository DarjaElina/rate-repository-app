import useRepository from '../hooks/useRepository';
import { useParams } from 'react-router-native';
import RepositoryItem from './RepositoryItem';
import ReviewsList from './ReviewsList';
import QueryResult from './QueryResult';

const SingleRepositoryView = () => {
  const { id } = useParams();
  const { loading, error, repository, fetchMore } = useRepository({
    first: 8,
    repositoryId: id
  });

  const reviewsNodes = repository
    ? repository.reviews.edges.map((edge) => edge.node)
    : [];

  const onEndReach = () => {
    fetchMore();
  };

  return (
    <QueryResult loading={loading} error={error} data={repository}>
      {repository &&
      <>
        <RepositoryItem
        showGitHubButton={true}
        item={repository}/>
        <ReviewsList onEndReach={onEndReach} reviews={reviewsNodes}/>
      </>}
      
    </QueryResult>
  )
};

export default SingleRepositoryView;