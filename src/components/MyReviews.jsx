import ReviewsList from "./ReviewsList";
import useAuthUser from "../hooks/useAuthUser";
import QueryResult from "./QueryResult";

const MyReviews = () => {
  const { loading, error, user } = useAuthUser(true);
  const reviewsNodes = user
    ? user.reviews.edges.map((edge) => edge.node)
    : [];

  return (
    <QueryResult error={error} loading={loading} data={user}>
      <ReviewsList isMyReview={true} reviews={reviewsNodes}/>
    </QueryResult>
  )
};

export default MyReviews;