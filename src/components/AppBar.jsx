import { View, StyleSheet } from 'react-native';
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
    justifyContent: 'space-between',
  }
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <AppBarTab text="Repositories"/>
      <AppBarTab text="Home"/>
      <AppBarTab text="Log out"/>
    </View>
  )
};

export default AppBar;