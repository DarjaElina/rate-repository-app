import { FlatList, StyleSheet} from "react-native";

import ReviewItem from "./ReviewItem";
import Text from "../Text";
import ItemSeparator from "../ItemSeparator";

const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
    padding: 10
  }
});
const ReviewsList = ({ reviews, isMyReview, onEndReach }) => {

  if (!reviews || reviews.length === 0) {
    return <Text style={styles.text}>No revies yet.</Text>
  }

  return (
    <FlatList
      onEndReached={onEndReach}
      onEndReachedThreshold={0.5}
      ItemSeparatorComponent={ItemSeparator}
      data={reviews}
      renderItem={({ item }) => <ReviewItem isMyReview={isMyReview} review={item} />}
    />
  )
};

export default ReviewsList;