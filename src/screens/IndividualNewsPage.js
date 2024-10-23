import * as React from "react";
import {Text, View, StyleSheet, ScrollView, Image} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Info = ({
                  title,
                  address,
                  time,
                  date,
                  analysis,
                  imageURL,
              }) =>{
    return (



        <View style={styles.card}>
            <View style ={styles.circle1}></View>


            <View style={styles.cardtwo}>
                <Text style = {{

                    color: 'white',
                    fontSize:30,
                    fontWeight: 'bold',
                    textAlign: 'center',
                    marginTop: 70,

                }}>Campus News and Events</Text>


            <Image
                source={{ uri: imageURL }}
                style={styles.image}
            />


            <Text style={styles.title}>{title}</Text>


                <View style={styles.address_time}>

                    <Text style = {styles.address}>{address}</Text>
                    <Text style = {styles.time}>{time}  {date}</Text>
                </View>

            </View>

            <View style ={styles.analysiscard}>




                <Text style = {styles.analysis} >{analysis}</Text>

            </View>
        </View>




    );
}

export default function IndividualNewsPage() {
    const navigation = useNavigation();
    const handleSubmit = () => {
        console.log('Going to Home Page...');
        navigation.navigate('Home');
    };

    return (
        <ScrollView>
            <View>


                <Info title = "news headline"
                      address = "999 Anywhere St., Apt 555, Medford MA 02155"
                      time = "3:30PM"
                      date = "Oct 11, 2075"
                      analysis = "Noenhabitant of that State for which he shall be chosen
Th"
                      imageURL = "https://media.istockphoto.com/id/1270059172/photo/purdue-welcome-center-at-purdue-university-purdue-university-is-a-public-research-university.jpg?s=612x612&w=0&k=20&c=0RK8E4Njaw6GTm56F7C2X2DIETGS_3Yt4g7WSDBGZi8="
                />
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    card: {
        flexDirection: 'column', // To make image and text side by side
        //padding: 10, //space beween cards
        backgroundColor: '#ffffff', // White background for the card
        borderRadius: 10,

        shadowColor: '#000', // Shadow effect for elevation
        shadowOpacity: 0.1,
        shadowRadius: 4,
        //height:'100%',



    },
    cardtwo: {

        flexDirection: 'column',
        backgroundColor: '#065758', // White background for the card
        width: '100%',

        justifyContent: 'center',


    },
    address_time: {
        flexDirection: 'row',
        marginLeft: 20,
        justifyContent: 'center',
        marginBottom: 20,




    },
    image: {

        width: '100%', // Set image width
        height: 150, // Set image height
        borderRadius: 10, // Rounded corners for the image
        marginRight: 10, // Space between image and text
        marginTop: 30,


    },
    title: {
        flex: 1,
        fontSize: 36, // Equivalent to text-2xl
        fontWeight: "bold",
        textAlign: "center",
        marginVertical: 20,
        color: 'white',
        height: '5%',
        width: '100%'
    },
    address: {
        color: 'white',
        flex: 2,
        fontSize: 20, // Equivalent to text-2xl
        fontWeight: "bold",

    },
    time: {
        color: 'white',
        flex: 2,
        fontSize: 20, // Equivalent to text-2xl
        fontWeight: "bold",


    },
    analysiscard: {
        marginTop: 30,
        flexDirection: 'row',
        backgroundColor: '#CDDDDE',
        borderRadius: 10,
        marginRight: 30,
        marginLeft: 30,
        minHeight: '35%',
        marginBottom: 50,


    },
    analysis:  {
        fontSize: 20,
        margin: 10,

    },
    circle1: {
        position: 'absolute',
        width: 200,
        height: 200,
        backgroundColor: 'rgba(255, 200, 200, 0.5)', // Light color with transparency
        borderRadius: 100, // Makes it a perfect circle
        top: -50,
        left: -50,
    },
});





