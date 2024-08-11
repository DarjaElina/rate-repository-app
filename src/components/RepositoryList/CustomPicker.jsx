import { Picker } from "@react-native-picker/picker";
import { StyleSheet } from "react-native";
import theme from "../../theme";

const styles = StyleSheet.create({
  picker: {
    height: 80,
    backgroundColor: theme.colors.backgroundSecondary
  }
});

const CPicker = ({ selectedSortingOrder, setSelectedSortingOrder }) => {
  return (
    <Picker
        itemStyle={styles.picker}
        mode="dropdown"
        selectedValue={selectedSortingOrder}
        onValueChange={(itemValue) =>
        setSelectedSortingOrder(itemValue)
      }>
      <Picker.Item label="Latest repositories" value="Latest repositories" />
      <Picker.Item label="Highest rated repositories" value="Highest rated repositories" />
      <Picker.Item label="Lowest rated repositories" value="Lowest rated repositories" />
    </Picker>
  )
};

export default CPicker;