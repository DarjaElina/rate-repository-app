import { View, StyleSheet, ScrollView } from 'react-native';

import Constants from 'expo-constants';
import AppBarTab from './AppBarTab';
import Button from './Button';
import theme from '../theme';
import useAuthUser from '../hooks/useAuthUser';
import useSignOut from '../hooks/useSignOut';
import Text from './Text';

const styles = StyleSheet.create({
  container: {
    padding: 5,
    paddingTop: Constants.statusBarHeight,
    paddingBottom: 15,
    backgroundColor: theme.colors.navBar,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 1
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
    <View>
      <ScrollView contentContainerStyle={styles.container} horizontal>
        <AppBarTab url="/" text="Repositories" />
        {!user && <AppBarTab url="/signIn" text="Sign In" />}
        {user && <Button title="Sign Out" onPress={signOut} />}
      </ScrollView>
    </View>
  )
};

export default AppBar;