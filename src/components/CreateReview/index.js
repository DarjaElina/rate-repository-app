import useReview from '../../hooks/useReview';
import { useNavigate } from 'react-router-native';
import { useState } from 'react';

import ReviewForm from './CreateReviewForm';

const CreateReview = () => {
  const [createReview] = useReview();
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState(null);

  const onSubmit = async (values) => {
    const { ownerName, repositoryName, rating, text } = values;

    try {
      const res = await createReview({ ownerName, repositoryName, rating: Number(rating), text });
      navigate(`/repositories/${res.createReview.repositoryId}`)
    } catch (error) {
      setErrorMessage(error.message);
      setTimeout(() => {
        setErrorMessage(null);
      }, 5000);
    }
  }

  return <ReviewForm errorMessage={errorMessage} onSubmit={onSubmit} />
};

export default CreateReview;