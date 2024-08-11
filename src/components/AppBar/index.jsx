import { View, StyleSheet, ScrollView } from 'react-native';

import Constants from 'expo-constants';
import AppBarTab from './AppBarTab';
import Button from '../Button';
import theme from '../../theme';
import useAuthUser from '../../hooks/useAuthUser';
import useSignOut from '../../hooks/useSignOut';
import Text from '../Text';

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.navBar,
    padding: 10,
    paddingTop: Constants.statusBarHeight,
    paddingBottom: 15,
  },
  contentContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  }
});

const AppBar = () => {
  const { loading, error, user } = useAuthUser();
  const { signOut } = useSignOut();

  if (loading) {
    return <Text>Loading user data...</Text>
  }
  if (error) {
    return <Text>Error loading user data.</Text>
  }

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.contentContainer} horizontal>
        <AppBarTab url="/" text="Repositories" />
        {!user && <AppBarTab url="/signIn" text="Sign In" />}
        {user && <AppBarTab url="/createReview" text="Create a review"/>}
        {!user && <AppBarTab url="/signUp" text="Sign Up"/>}
        {user && <AppBarTab url="/myReviews" text=" My reviews"/>}
        {user && <Button title="Sign Out" onPress={signOut} />}
      </ScrollView>
    </View>
  )
};

export default AppBar;