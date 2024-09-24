import * as React from "react";
import { ScrollView, View, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import NewsPanel from "../components/NewsPanel";

export default function NewsAndEventsPage() {
    const navigation = useNavigation();

    return (
            <View style={styles.container}>
                <Text style={styles.title}>News and Events</Text>
                <ScrollView style={{ width:'100%' }}>
                    <NewsPanel title = "Rohit is bad!!!!!!" summary = "He is not understanding what iim doing" image = "https://i.redd.it/i-got-bored-so-i-decided-to-draw-a-random-image-on-the-v0-4ig97vv85vjb1.png?width=1280&format=png&auto=webp&s=7177756d1f393b6e093596d06e1ba539f723264b">
                    </NewsPanel>
                    <NewsPanel title = "Rohit is good!!!!!!" summary = "He IS understanding what iim doing" image = "https://i.redd.it/i-got-bored-so-i-decided-to-draw-a-random-image-on-the-v0-4ig97vv85vjb1.png?width=1280&format=png&auto=webp&s=7177756d1f393b6e093596d06e1ba539f723264b">
                    </NewsPanel>
                    <NewsPanel title = "Rohit is evil!!!!!!" summary = "He burned down my crop harvest!!! What the heck man?" image = "https://i.redd.it/i-got-bored-so-i-decided-to-draw-a-random-image-on-the-v0-4ig97vv85vjb1.png?width=1280&format=png&auto=webp&s=7177756d1f393b6e093596d06e1ba539f723264b">
                    </NewsPanel>
                    <NewsPanel title = "Rohit is nice :)" summary = "He gave my grandmother one THOUSAND dollars???" image = "https://i.redd.it/i-got-bored-so-i-decided-to-draw-a-random-image-on-the-v0-4ig97vv85vjb1.png?width=1280&format=png&auto=webp&s=7177756d1f393b6e093596d06e1ba539f723264b">
                    </NewsPanel>
                </ScrollView>
            </View>
        
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "top",
        backgroundColor: "#F0FDF4", // Equivalent to bg-green-50
        width: "100%",
        height: "100%",
    },
    title: {
        fontSize: 24, // Equivalent to text-2xl
        fontWeight: "bold",
        textAlign: "center",
        marginVertical: 20
    },
});
