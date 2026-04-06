import React from "react";
import { View, Text } from "react-native";
import { Screen } from "../types";
import { GreenButton, OutlineButton } from "../components";
import { styles } from "../styles";

interface Props {
  navigate: (s: Screen) => void;
}

const HomeScreen = ({ navigate }: Props) => (
  <View style={styles.center}>
    <View style={styles.logoWrap}>
      <Text style={styles.logoIcon}>⚽</Text>
    </View>
    <Text style={styles.brand}>ISIFOOT</Text>
    <Text style={styles.brandSub}>ISIMA · Mahdia</Text>
    <Text style={styles.tagline}>Reserve. Play. Compete.</Text>
    <GreenButton  label="Sign In"        onPress={() => navigate("login")}    style={{ marginTop: 40, width: 240 }} />
    <OutlineButton label="Create Account" onPress={() => navigate("register")} style={{ marginTop: 12, width: 240 }} />
  </View>
);

export default HomeScreen;
