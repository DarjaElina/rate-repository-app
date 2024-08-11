import { useMutation } from '@apollo/client';
import { CREATE_REVIEW, DELETE_REVIEW } from '../graphql/mutations';
import { GET_CURRENT_USER } from '../graphql/queries';

// although it might be overly complicated, I wanted to try implementing cache update instead of using refetch() :)

const useReview = () => {
  const [mutateCreate, result] = useMutation(CREATE_REVIEW, {
    update: (cache, response) => {
      const newReview = response.data.createReview;

      const existingUserData = cache.readQuery({
        query: GET_CURRENT_USER,
        variables: { includeReviews: true }
      });

      if (existingUserData && existingUserData.me) {
        const existingReviews = existingUserData?.me?.reviews || { edges: [] };

        const updatedReviews = {
          ...existingReviews,
          edges: [{ node: newReview }, ...existingReviews.edges],
        };

        cache.writeQuery({
          query: GET_CURRENT_USER,
          data: {
            me: {
              ...existingUserData.me,
              reviews: updatedReviews,
            }
          },
          variables: { includeReviews: true }
        });
      } else {
        cache.writeQuery({
          query: GET_CURRENT_USER,
          data: {
            me: {
              ...existingUserData.me,
              reviews: {
                edges: [{ node: newReview }],
              }
            }
          },
          variables: { includeReview: true }
        })
      }
    }
  });

  const [mutateDelete] = useMutation(DELETE_REVIEW);

  const createReview = async ({ ownerName, repositoryName, rating, text }) => {
    const { data } = await mutateCreate({
      variables: { review: { ownerName, repositoryName, rating, text } }
    });

    return data;
  };

  const deleteReview = async ({ deleteReviewId }) => {
    try {
      const { data } = await mutateDelete({
        variables: { deleteReviewId },
        update: (cache) => {
          const { me } = cache.readQuery({
            query: GET_CURRENT_USER,
            variables: { includeReviews: true }
          });

          console.log(me);

          const updatedReviews = me.reviews.edges.filter((edge) => {
            return edge.node.id !== deleteReviewId
          });

          cache.writeQuery({
            query: GET_CURRENT_USER,
            variables: { includeReviews: true },
            data: {
              me: {
                ...me,
                reviews: {
                  ...me.reviews,
                  edges: updatedReviews
                }
              }
            }
          })
        }
      });
  
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  return [createReview, deleteReview, result];
};

export default useReview;