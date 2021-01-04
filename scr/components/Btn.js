import React from "react";
import { View, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import ButtonStyle from "../Styles/ButtonStyle";
import { AntDesign } from "@expo/vector-icons";

const Btn = ({ title, buttonThemeStyle, color, buttonText }) => {
  return (
    <View style={ButtonStyle.buttonView}>
      <TouchableOpacity style={buttonThemeStyle}>
        <Text style={buttonText}>{title}</Text>
        <AntDesign
          style={ButtonStyle.iconStyle}
          name="arrowright"
          size={24}
          color = {color}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Btn;
