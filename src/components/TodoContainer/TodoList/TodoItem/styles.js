import {StyleSheet} from "react-native";
import navbarBlue from "../../../../palette";

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    height: 70,
    borderRadius: 4,
    borderColor: navbarBlue,
    paddingHorizontal: 15,
    marginVertical: 10
  },
  itemText: {
    flexDirection: 'row',
  }
});
export default styles
