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

const RegisterScreen = ({ navigate, onLogin }: Props) => {
  const [name,  setName]  = useState("");
  const [email, setEmail] = useState("");
  const [promo, setPromo] = useState("");
  const [pass,  setPass]  = useState("");

  const handleRegister = () => {
    if (!name || !email || !promo || !pass) { Alert.alert("Error", "Please fill all fields."); return; }
    onLogin({ id: "u_new", name, email, promo });
  };

  return (
    <ScrollView contentContainerStyle={styles.formScreen}>
      <TouchableOpacity onPress={() => navigate("home")} style={styles.backBtn}>
        <Text style={styles.backText}>← Back</Text>
      </TouchableOpacity>

      <Text style={styles.screenTitle}>Join ISIFOOT</Text>
      <Text style={styles.screenSub}>Create your student account</Text>

      <Field placeholder="Full name"               value={name}  onChangeText={setName}  />
      <Field placeholder="University email"        value={email} onChangeText={setEmail} />
      <Field placeholder="Promo (e.g. GLSI2C)"    value={promo} onChangeText={setPromo} />
      <Field placeholder="Password"               value={pass}  onChangeText={setPass}  secureTextEntry />

      <GreenButton label="Create Account" onPress={handleRegister} style={{ marginTop: 8 }} />

      <TouchableOpacity onPress={() => navigate("login")} style={{ marginTop: 20, alignSelf: "center" }}>
        <Text style={styles.linkText}>
          Already have an account? <Text style={{ color: C.accent }}>Sign in</Text>
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default RegisterScreen;
