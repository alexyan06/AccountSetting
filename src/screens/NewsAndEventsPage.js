import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import CustomButton from "../components/CustomButton";
import NewsPanel from "../components/NewsPanel";

export default function NewsAndEventsPage() {
    const navigation = useNavigation();

    const handleSubmit = () => {
        console.log("Going to Map Page...");
        navigation.navigate("React Native Maps");
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>ASP.NET + React Native Demo Project</Text>
            <NewsPanel title = "Rohit is bad!!!!!!" summary = "He is not understanding what iim doing" image = "https://i.redd.it/i-got-bored-so-i-decided-to-draw-a-random-image-on-the-v0-4ig97vv85vjb1.png?width=1280&format=png&auto=webp&s=7177756d1f393b6e093596d06e1ba539f723264b">
            </NewsPanel>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#F0FDF4", // Equivalent to bg-green-50
        width: "100%",
        height: "100%",
    },
    title: {
        fontSize: 24, // Equivalent to text-2xl
        fontWeight: "bold",
        textAlign: "center",
    },
    buttonContainer: {
        alignItems: "center",
        justifyContent: "center",
        marginTop: 16, // Equivalent to mt-4
    },
});
