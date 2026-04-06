import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Screen } from "../types";
import { NAV_ITEMS } from "../constants/data";
import { styles } from "../styles";
import { C } from "../constants/colors";

interface Props {
  current: Screen;
  navigate: (s: Screen) => void;
}

const BottomNav = ({ current, navigate }: Props) => (
  <View style={styles.bottomNav}>
    {NAV_ITEMS.map((item) => (
      <TouchableOpacity
        key={item.screen}
        style={styles.navItem}
        onPress={() => navigate(item.screen)}
        activeOpacity={0.7}
      >
        <Text style={styles.navIcon}>{item.icon}</Text>
        <Text style={[styles.navLabel, current === item.screen && { color: C.accent }]}>
          {item.label}
        </Text>
        {current === item.screen && <View style={styles.navDot} />}
      </TouchableOpacity>
    ))}
  </View>
);

export default BottomNav;
