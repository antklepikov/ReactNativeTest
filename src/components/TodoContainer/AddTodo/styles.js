import {StyleSheet} from "react-native";
import {navbarBlue, white} from "../../../palette";

const styles = StyleSheet.create({
  keyboardBlock: {
    display: 'flex'
  },
  addInput: {
    width: '100%',
    height: 40,
    marginTop: 8,
    marginBottom: 8,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: navbarBlue,
  },
  addButton: {
    width: '50%',
    margin: 'auto',
    height: 30,
    backgroundColor: navbarBlue,
    borderRadius: 4
  },
  addButtonTextWrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  addButtonText: {
    color: white,
    textAlign: 'center',
    fontSize: 18,
  }

});
export default styles
