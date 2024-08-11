import { View, StyleSheet, Alert } from 'react-native';
import theme from '../../theme';
import { format } from 'date-fns';
import Text from '../Text';
import Button from '../Button';
import { useNavigate } from 'react-router-native';
import useReview from '../../hooks/useReview';

const styles = StyleSheet.create({
  outerContainer: {
    padding: 20,
    backgroundColor: theme.colors.backgroundSecondary,
    display: 'flex',
    alignItems: 'center'
  },
  innerContainer: {
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
  },
  rating: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 30,
    height: 30,
    borderWidth: 2,
    borderColor: theme.colors.primary,
    borderRadius: 15,
  },
  ratingText: {
    textAlign: 'center'
  },
  details: {
    flex: 1,
    gap: 5
  },
  buttonSet: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 5
  }
})



const ReviewItem = ({ review, isMyReview }) => {
  const { text, rating, createdAt, user, repository, id } = review;
  const [ , deleteReview] = useReview();
  const navigate = useNavigate();

  const formattedDate = format(new Date(createdAt), "dd.MM.yyyy");

  const onShowRepository = (id) => {
    navigate(`/repositories/${id}`);
  };

  const onDeleteReview = (deleteReviewId) => {
    
  Alert.alert('Delete review', 'Are you sure you want to delete this review?', [
      {
        text: 'Delete',
        onPress: async () => {
          try {
            await deleteReview({ deleteReviewId });
          } catch (error) {
            console.log(error);
          }
        }
      },
      {
        text: 'Cancel',
        onPress: () => console.log('okay then'),
        style: 'cancel'
      }
    ])
  };

  return (
    <View style={styles.outerContainer}>
      <View style={styles.innerContainer}>
        <View style={styles.rating}>
          <Text style={styles.ratingText} fontWeight="bold" color="primary">{rating}</Text>
        </View>
        <View style={styles.details}>
          <Text fontWeight="bold">{isMyReview ? repository.fullName : user.username}</Text>
          <Text color="textSecondary">{formattedDate}</Text>
          <Text>{text}</Text>
        </View>
      </View>
      {isMyReview &&
        <View style={styles.buttonSet}>
          <Button title="View repository" onPress={() => onShowRepository(repository.id)}/>
          <Button type="delete" title="Delete review" onPress={() => onDeleteReview(id)}/>
        </View>
      }
    </View>
  )
};

export default ReviewItem;