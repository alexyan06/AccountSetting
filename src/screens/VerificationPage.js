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
      <Text style={styles.title}>Verification</Text>

      <View style={styles.titleSpacer} />
      <Text style={styles.message}>Please enter the verification code sent to j*******@purdue.edu</Text>
      <TextInput
        style={styles.input}
        placeholder="______"
        value={code}
        onChangeText={checkCode}
      />

      <Text style={styles.resendButton}>Resend Code</Text>

      <View style={styles.buttonSpacer} />

      <Text onPress={handleVerify} style={styles.verifyButton}>Verify</Text>

      <View style={styles.bottomSpacer} />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
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
    fontSize: 40,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#065758",
  },
  titleSpacer: {
    height: 170,
  },
  message: {
    fontSize: 16,
    color: "#666",
    marginBottom: 20,
    textAlign: "center",
  },
  input: {
    height: 90,
    borderColor: '#bdc3c7', // Light gray border
    borderWidth: 1,
    borderRadius: 25,
    fontSize: 36,
    textAlign: "center",
    paddingLeft: 15,
    width: '85%',
    marginBottom: 20,
  },
  resendButton: {
    backgroundColor: '#BF6E65',
    paddingVertical: 4,
    paddingHorizontal: 0,
    textAlign: "center",
    justifyContent: "center",
    width: 100,
    height: 20,
    borderRadius: 25,
    color: '#fff',
    fontSize: 11,
  },
  buttonSpacer: {
    height: 190,
  },
  verifyButton: {
    backgroundColor: '#065758',
    paddingVertical: 20,
    paddingHorizontal: 25,
    textAlign: "center",
    justifyContent: "center",
    width: 375,
    height: 70,
    borderRadius: 25,
    color: '#fff',
    fontSize: 24,
  },
  bottomSpacer: {
    height: 50,
  },
});
