import React from "react";
import { TextInput, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import input from "../Styles/input";
import { TouchableOpacity } from "react-native-gesture-handler";

const Input = ({
  view,
  textField,
  label,
  value,
  onChangeText,
  placeHolder,
  secureTextEntry,
  iconName,
  onChangeIcon,
  onChangeEncryption,
  color,
}) => {
  return (
    <View style={view}>
      <TouchableOpacity
        onPress={() => {
          if (iconName == "eye") {
            onChangeIcon("eye-off");
            onChangeEncryption(true);
          }
          if (iconName == "eye-off") {
            onChangeIcon("eye");
            onChangeEncryption(false);
          }
        }}
      >
        <Feather
          style={input.iconStyle}
          name={iconName}
          size={22}
          color={color}
        />
      </TouchableOpacity>
      <TextInput
        label={label}
        value={value}
        onChangeText={(newValue) => onChangeText(newValue)}
        placeholder={placeHolder}
        secureTextEntry={secureTextEntry}
        style={textField}
      />
    </View>
  );
};

export default Input;
