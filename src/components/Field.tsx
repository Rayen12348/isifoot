import React from "react";
import { TextInput } from "react-native";
import { styles } from "../styles";
import { C } from "../constants/colors";

interface Props {
  placeholder: string;
  value: string;
  onChangeText: (t: string) => void;
  secureTextEntry?: boolean;
}

const Field = ({ placeholder, value, onChangeText, secureTextEntry }: Props) => (
  <TextInput
    style={styles.input}
    placeholder={placeholder}
    placeholderTextColor={C.muted}
    value={value}
    onChangeText={onChangeText}
    secureTextEntry={secureTextEntry}
    autoCapitalize="none"
  />
);

export default Field;
