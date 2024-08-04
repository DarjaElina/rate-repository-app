import { View, StyleSheet, ScrollView } from 'react-native';

import Constants from 'expo-constants';
import AppBarTab from './AppBarTab';
import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    padding: 5,
    paddingTop: Constants.statusBarHeight,
    paddingBottom: 15,
    backgroundColor: theme.colors.navBar,
    display: 'flex',
    flexDirection: 'row',
  }
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <AppBarTab url="/" text="Repositories"/>
        <AppBarTab url="/signIn" text="Sign In"/>
      </ScrollView>
    </View>
  )
};

export default AppBar;