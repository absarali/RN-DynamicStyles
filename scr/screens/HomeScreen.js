import React, { useState } from "react";
import { View } from "react-native";
import Header from "../components/Header";
import theme from "../Styles/theme";
import Input from "../components/Input";
import Btn from "../components/Btn";
import ButtonStyle from "../Styles/ButtonStyle";
import fonts from '../Styles/fonts'
import input from '../Styles/input'

const HomeScreen = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const [view, setView] = useState(input.view)
  const [textField, setTextField] = useState(input.textField)
  const [buttonText, setButtonText] = useState(ButtonStyle.textStyle)
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [encrypted1, setEncrypted1] = useState(true);
  const [encrypted2, setEncrypted2] = useState(true);
  const [buttonThemeStyle, setButtonStyle] = useState(ButtonStyle.buttonStyle);
  const nonEncrypted = false;
  const [passwordIconName1, setPasswordIconName1] = useState("eye");
  const [passwordIconName2, setPasswordIconName2] = useState("eye");
  let emailIconName = "mail"
  const [screenTheme, setTheme] = useState(theme.themeDark)
  const [color, setColor] = useState(fonts.colorDark.color)
  const toggleSwitch = () => {
    if (!isEnabled) {
      setButtonStyle(ButtonStyle.buttonStyleDark);
      setTheme(theme.theme)
      setColor(fonts.color.color)
      setView(input.viewDark)
      setTextField(input.textFieldDark)
      setButtonText(ButtonStyle.textStyleDark)
    }
    if (isEnabled) {
      setButtonStyle(ButtonStyle.buttonStyle);
      setTheme(theme.themeDark)
      setColor(fonts.colorDark.color)
      setView(input.view)
      setTextField(input.textField)
      setButtonText(ButtonStyle.textStyle)
    }
    setIsEnabled((previousState) => !previousState);
  };
  
  return (
    <View style={screenTheme}>
      <Header
        isEnabled={isEnabled}
        toggleSwitch={toggleSwitch}
        ButtonStyle={setButtonStyle}
        HeaderText="HomeScreen"
      />
      <Input
        label={"name"}
        value={name}
        onChangeText={setName}
        placeHolder={"Enter your email"}
        secureTextEntry={nonEncrypted}
        iconName={emailIconName}
        color = {color}
        view = {view}
        textField = {textField}
      />
      <Input
        label={"password"}
        value={password}
        onChangeText={setPassword}
        placeHolder={"Password"}
        secureTextEntry={encrypted1}
        iconName={passwordIconName1}
        onChangeIcon={setPasswordIconName1}
        onChangeEncryption={setEncrypted1}
        color = {color}
        view = {view}
        textField = {textField}
      />
      <Input
        label={"confirmPassword"}
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        placeHolder={"Confirm Password"}
        secureTextEntry={encrypted2}
        iconName={passwordIconName2}
        onChangeIcon={setPasswordIconName2}
        onChangeEncryption={setEncrypted2}
        color = {color}view = {view}
        textField = {textField}
      />
      <Btn
        title="Log in"
        disabled={false}
        iconName="email"
        buttonThemeStyle={buttonThemeStyle}
        color = {color}
        buttonText = {buttonText}
      />
    </View>
  );
};
export default HomeScreen;
