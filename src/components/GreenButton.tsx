import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { styles } from "../styles";

interface Props {
  label: string;
  onPress: () => void;
  style?: object;
}

const GreenButton = ({ label, onPress, style }: Props) => (
  <TouchableOpacity style={[styles.greenBtn, style]} onPress={onPress} activeOpacity={0.8}>
    <Text style={styles.greenBtnText}>{label}</Text>
  </TouchableOpacity>
);

export default GreenButton;
