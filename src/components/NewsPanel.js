import React, { useState } from "react";
import { Text, Pressable, StyleSheet, Image } from "react-native";

const NewsPanel = ({ image, title, summary}) => {
    const handlePress = () => {
        console.log("I pressed this news");
    };

    return (
        <Pressable style={styles.button} onPress={handlePress}>
            <Image
                source={{ uri: image }}
                style={{ width: 200, height: 200 }}
            />
            <Text style={styles.text}>{title}</Text>
            <Text style={styles.text}>{summary}</Text>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: "#38a169",
        width: 240,
        paddingVertical: 10,
        paddingHorizontal: 50,
        borderRadius: 7,
        alignItems: "center",
        justifyContent: "center",
    },
    buttonText: {
        fontWeight: "500",
        color: "#ffffff",
        fontSize: 18,
        textAlign: "center",
    },
    text: {
        fontSize: 12, // Equivalent to text-2xl
    }
});

export default NewsPanel;
