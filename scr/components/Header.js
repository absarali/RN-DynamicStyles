import React from "react";
import { Text, View, Switch } from "react-native";
import headerStyle from "../Styles/headerStyle";
import { AntDesign } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
const Header = ({ HeaderText, isEnabled, toggleSwitch }) => {
  return (
    <View style={headerStyle.header}>
      <TouchableOpacity>
        <AntDesign name="arrowleft" size={24} color="black" />
      </TouchableOpacity>
      <Text style={headerStyle.text}>{HeaderText}</Text>
      <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  );
};

export default Header;
