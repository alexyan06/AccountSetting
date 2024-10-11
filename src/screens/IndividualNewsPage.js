import * as React from "react";
import { Text, View, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';



export default function IndividualNewsPage() {
    const navigation = useNavigation();
    const handleSubmit = () => {
        console.log('Going to Home Page...');
        navigation.navigate('Home');
    };

    return (
        <View>
            <View >
                <Text>
                    <Text style={{ color: '#CDDDDE' }}>Individual News Page updating  </Text>

                </Text>
            </View>


        </View>
    );
}


