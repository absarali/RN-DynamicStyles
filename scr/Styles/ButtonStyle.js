import { StyleSheet } from "react-native";

export default StyleSheet.create({
  buttonView: {
    marginTop: 20,
    alignSelf: 'center',
  },
  buttonStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 5,
    backgroundColor: 'lightblue',
    borderWidth: 0.5,
    marginLeft: 5,
    marginRight: 5
},
buttonStyleDark: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  borderRadius: 5,
  backgroundColor: '#C83E94',
  borderWidth: 0.5,
  marginLeft: 5,
  marginRight: 5
},
textStyle: {
  paddingLeft: 20,
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
    paddingVertical: 10
},
textStyleDark: {
  paddingLeft: 20,
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    paddingVertical: 10
},
iconStyle: {
  paddingHorizontal: 20,
  alignSelf: 'center'
}
});
