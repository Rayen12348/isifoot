import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { styles } from "../styles";

interface Props {
  label: string;
  onPress: () => void;
  style?: object;
}

const OutlineButton = ({ label, onPress, style }: Props) => (
  <TouchableOpacity style={[styles.outlineBtn, style]} onPress={onPress} activeOpacity={0.8}>
    <Text style={styles.outlineBtnText}>{label}</Text>
  </TouchableOpacity>
);

export default OutlineButton;
