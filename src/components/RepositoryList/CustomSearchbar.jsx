import { Searchbar } from "react-native-paper";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  searchbar: {
    backgroundColor: '#fff',
    borderRadius: 0,
  }
})

const CSearchbar = ({ searchQuery, setSearchQuery }) => {
  
  return (
    <Searchbar
      style={styles.searchbar}
      placeholder="Search"
      onChangeText={setSearchQuery}
      value={searchQuery}
    />
  )
};

export default CSearchbar;