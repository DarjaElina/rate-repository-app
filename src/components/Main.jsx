import { StyleSheet, View } from 'react-native';
import { Route, Routes, Navigate } from 'react-router-native';

import theme from '../theme';

import AppBar from './AppBar/index';
import SignIn from './SignIn';
import RepositoryList from './RepositoryList';
import SingleRepositoryView from './SingleRepositoryView';
import ReviewForm from './CreateReview';
import SignUp from './SignUp';
import MyReviews from './MyReviews';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
    backgroundColor: theme.colors.backgroundMain
  },
});


const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar/>
      <Routes>
        <Route path="/" element={<RepositoryList />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="*" element={<Navigate to="/" replace />} />
        <Route path="/repositories/:id" element={<SingleRepositoryView />} />
        <Route path="/createReview" element={<ReviewForm />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/myReviews" element={<MyReviews/>} />
      </Routes>
    </View>
  );
};

export default Main;