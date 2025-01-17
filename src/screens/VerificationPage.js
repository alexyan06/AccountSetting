import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, TextInput, Button, StyleSheet, Alert } from "react-native";
import HomePage from "./HomePage";

export default function VerificationPage() {
  const navigation = useNavigation();
  const [code, checkCode] = useState("");
  const [password, setPassword] = useState("");

  const handleVerify = () => {
    navigation.navigate("Home");
  };

  return (
    <View style={styles.container}>
      <View style={styles.circle1} />
      <View style={styles.circle2} />
      <View style={styles.circle3} />
      <Text style={styles.title}>Verify Account</Text>
      <Text>Enter the security code sent to your phone number</Text>
      <TextInput
        style={styles.input}
        placeholder="XXX-XXX"
        value={code}
        onChangeText={checkCode}
      />

      <Button title="Verify" onPress={handleVerify} />

      <Text>Resend Code</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#fff",
    padding: 16,
    textAlign: "left",
  },
  circle1: {
    position: "absolute",
    width: 420,
    height: 420,
    borderRadius: 420 / 2,
    backgroundColor: "#A5C2C480",
    left: -124,
    top: 543,
  },
  circle2: {
    position: "absolute",
    width: 300,
    height: 300,
    borderRadius: 300 / 2,
    backgroundColor: "#A5C2C480",
    left: 194,
    top: -158,
  },
  circle3: {
    position: "absolute",
    width: 300,
    height: 300,
    borderRadius: 300 / 2,
    backgroundColor: "#A5C2C480",
    left: 185,
    top: 665,
  },
  title: {
    fontSize: 24,
    marginBottom: 24,
    color: "#020202",
  },
  input: {
    width: "80%",
    padding: 10,
    borderWidth: 1,
    borderColor: "#020202",
    marginBottom: 12,
    borderRadius: 5,
  },
  Button: {
    color: "#ec9a9a",
  },
});
