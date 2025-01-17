import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, TextInput, TouchableWithoutFeedback, Keyboard, Button, StyleSheet, Alert, Image } from "react-native";
import HomePage from "./HomePage";

export default function VerificationPage() {
  const navigation = useNavigation();
  const [code, checkCode] = useState("");
  const [password, setPassword] = useState("");

  const handleVerify = () => {
    navigation.navigate("Home");
  };

  const handleResend = () => {
    navigation.navigate("Home");
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.container}>
        <View style={styles.circle1} />
        <View style={styles.circle2} />
        <View style={styles.circle3} />

        <Text style={styles.title}>Verification</Text>
        <Image style={styles.icon} source={require('../../assets/verification-page-icon.png')} />

        <View style={styles.titleSpacer} />

        <Text style={styles.message}>Please enter the verification code sent to j*******@purdue.edu</Text>
        <TextInput
          style={styles.input}
          placeholder="______"
          value={code}
          keyboardType="numeric"
          onChangeText={checkCode}
          maxLength={6}
          placeholderTextColor="#555"
        />

        <Text onpress={handleResend} style={styles.resendButton}>Resend Code</Text>

        <View style={styles.buttonSpacer} />

        <Text onPress={handleVerify} style={styles.verifyButton}>Verify</Text>

        <View style={styles.bottomSpacer} />

      </View>
    </TouchableWithoutFeedback>
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
    textShadowColor: '#00000040',
    textShadowOffset: { width: 0, height: 4 },
    textShadowRadius: 4,
  },
  icon: {
    maginTop: 20,
    width: 40,
    height: 52,
  },
  titleSpacer: {
    height: 110,
  },
  message: {
    fontSize: 16,
    color: "#000",
    marginBottom: 20,
    textAlign: "center",
    textShadowColor: '#00000040',
    textShadowOffset: { width: 0, height: 4 },
    textShadowRadius: 4,
  },
  input: {
    height: 90,
    borderColor: '#000',
    color: "#555",
    borderWidth: 1,
    borderRadius: 25,
    fontSize: 36,
    letterSpacing: 25,
    paddingLeft: '10%',
    width: '85%',
    marginBottom: 20,
  },
  resendButton: {
    backgroundColor: '#BF6E65',
    paddingVertical: 4,
    paddingHorizontal: 0,
    textAlign: "center",
    justifyContent: "center",
    width: 120,
    height: 25,
    borderRadius: 25,
    color: '#fff',
    fontSize: 14,
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
    width: '85%',
    height: 70,
    borderRadius: 25,
    color: '#fff',
    fontSize: 24,
    textShadowColor: '#00000040',
    textShadowOffset: { width: 0, height: 4 },
    textShadowRadius: 4,
  },
  bottomSpacer: {
    height: 50,
  },
});
