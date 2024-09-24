import React, { useState } from "react";
import { View, Text, Pressable, StyleSheet, Image } from "react-native";

const NewsPanel = ({ image, title, summary}) => {
    const handlePress = () => {
        console.log("I pressed this news");
    };

    return (
        <Pressable style={styles.panel} onPress={handlePress}>
            <Image
                source={{ uri: image }}
                style={styles.image}
            />
            <View style={styles.textSection}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.summary}>{summary}</Text>
            </View>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    panel: {
        backgroundColor: "#38a169",
        paddingBottom: 10,
        paddingHorizontal: 0,
        width: '100%',
        marginVertical: 10,
        marginHorizontal: 0
    },
    textSection: {
        paddingVertical: 15,
        paddingHorizontal: 20
    },
    title: {
        fontSize: 20, // Equivalent to text-2xl
        fontWeight: "semibold"
    },
    summary: {
        fontSize: 12
    },
    image: {
        width: '100%',
        height: 125,
        objectFit: 'cover'
    }
});

export default NewsPanel;
