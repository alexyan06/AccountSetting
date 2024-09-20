import React, { useState } from "react";
import { Text, Pressable, StyleSheet, Image } from "react-native";

const NewsPanel = ({ image, title, summary}) => {
    const handlePress = () => {
        console.log("I pressed this news");
    };

    return (
        <Pressable style={styles.panel} onPress={handlePress}>
            <Image
                source={{ uri: image }}
                style={{ width: 200, height: 200 }}
            />
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.summary}>{summary}</Text>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    panel: {
        backgroundColor: "#38a169",
        paddingVertical: 10,
        paddingHorizontal: 50,
    },
    title: {
        fontSize: 20, // Equivalent to text-2xl
        fontWeight: "semibold"
    },
    summary: {
        fontSize: 12
    }
});

export default NewsPanel;
