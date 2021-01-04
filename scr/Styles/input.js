import { StyleSheet } from "react-native";

export default StyleSheet.create({
  view: {
    margin: 10,
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "black",
  },
  viewDark: {
    margin: 10,
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "white",
  },
  iconStyle: {
    alignSelf: "center",
  },
  textField: {
    color: 'black',
    width: "100%",
    paddingLeft: 10
  },
  textFieldDark: {
    color: 'white',
    width: "100%",
    paddingLeft: 10
  },
});
