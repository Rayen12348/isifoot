import React, { useState } from "react";
import { ScrollView, Text, TouchableOpacity, Alert } from "react-native";
import { Screen, User } from "../types";
import { GreenButton, Field } from "../components";
import { styles } from "../styles";
import { C } from "../constants/colors";

interface Props {
  navigate: (s: Screen) => void;
  onLogin: (u: User) => void;
}

const LoginScreen = ({ navigate, onLogin }: Props) => {
  const [email, setEmail] = useState("");
  const [pass,  setPass]  = useState("");

  const handleLogin = () => {
    if (!email || !pass) { Alert.alert("Error", "Please fill in all fields."); return; }
    onLogin({ id: "u0", name: "Student User", email, promo: "GLSI2C" });
  };

  return (
    <ScrollView contentContainerStyle={styles.formScreen}>
      <TouchableOpacity onPress={() => navigate("home")} style={styles.backBtn}>
        <Text style={styles.backText}>← Back</Text>
      </TouchableOpacity>

      <Text style={styles.screenTitle}>Welcome back</Text>
      <Text style={styles.screenSub}>Sign in to your ISIFOOT account</Text>

      <Field placeholder="University email" value={email} onChangeText={setEmail} />
      <Field placeholder="Password"         value={pass}  onChangeText={setPass}  secureTextEntry />

      <GreenButton label="Sign In" onPress={handleLogin} style={{ marginTop: 8 }} />

      <TouchableOpacity onPress={() => navigate("register")} style={{ marginTop: 20, alignSelf: "center" }}>
        <Text style={styles.linkText}>
          No account? <Text style={{ color: C.accent }}>Register</Text>
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default LoginScreen;
