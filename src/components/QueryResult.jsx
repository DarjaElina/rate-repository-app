import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

const QueryResult = ({ loading, error, data, children }) => {
  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color={theme.colors.primary} />
        <Text>Loading...</Text>
      </View>
    );
  }
  if (error) {
    return (
      <View style={styles.container}>
        <Text>ERROR: {error.message}</Text>
      </View>
    );
  }
  if (!data) {
    return (
      <View style={styles.container}>
        <Text>Nothing to show...</Text>
      </View>
    );
  }
  return children;
};

export default QueryResult;