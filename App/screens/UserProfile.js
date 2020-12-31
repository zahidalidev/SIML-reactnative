import React, { useState } from 'react';
import { Button, Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View, ImageBackground, Platform } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { StatusBar } from 'expo-status-bar';
import { RFPercentage } from 'react-native-responsive-fontsize';
import Constants from 'expo-constants'
import { MaterialCommunityIcons } from "@expo/vector-icons"
import { LinearGradient } from 'expo-linear-gradient';
import { Picker } from "@react-native-community/picker"


import colors from '../config/colors'
import AppPicker from '../components/AppPicker';
import MainPicker from '../components/MainPicker';
import { color } from 'react-native-reanimated';
import { Badge } from 'react-native-paper';

function UserProfile(props) {
    const [selectedImage, setImage] = useState("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxxaLKZOlv4hNd4MW8kY-WbKixRDSwQ3b_rw&usqp=CAU")


    const handleImage = async () => {
        let permissionResult = await ImagePicker.requestCameraRollPermissionsAsync();

        if (permissionResult.granted === false) {
            alert("Permission to access camera roll is required!");
            return;
        }

        let pickerResult = await ImagePicker.launchImageLibraryAsync();
        setImage(pickerResult)
        console.log(pickerResult);

    }

    return (
        <View style={styles.container}>
            <StatusBar style="auto" backgroundColor='white' />
            <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollContainer} >
                <View style={styles.subContainer} >



                    <View style={{ backgroundColor: 'white', marginTop: RFPercentage(5), flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'center' }}>
                        <Text style={{ fontSize: RFPercentage(2.2), color: colors.primary }} >SIML</Text>
                    </View>
                    {/* profile picture */}
                    <ImageBackground resizeMode="cover" borderRadius={RFPercentage(15)} source={{ uri: selectedImage }} style={{ marginTop: RFPercentage(10), borderRadius: RFPercentage(15), width: RFPercentage(30), height: RFPercentage(30), borderColor: colors.grey, borderWidth: 1, flexDirection: 'column', alignItems: 'flex-end', justifyContent: 'flex-end' }}>
                    </ImageBackground>

                    <View style={{ backgroundColor: 'white', flex: 1, width: "85%", marginTop: RFPercentage(6), flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'flex-start' }}>
                        <Text style={{ fontSize: RFPercentage(2.2), color: colors.primary }} >User's name</Text>
                        <Text style={{ fontSize: RFPercentage(2.2), color: colors.primary }} >Location</Text>
                    </View>


                    <View style={{ backgroundColor: 'white', marginTop: RFPercentage(8), width: "90%", flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center' }} >
                        <View style={{ backgroundColor: 'white', flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }} >
                            <TouchableOpacity style={{ marginRight: RFPercentage(2.5), backgroundColor: "#EBE8E8", width: RFPercentage(8), height: RFPercentage(8), maxWidth: RFPercentage(8), flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }} >
                                <Image resizeMode="cover" source={require("../../assets/GroupProfile_1.png")} />
                            </TouchableOpacity>

                            <TouchableOpacity style={{ marginRight: RFPercentage(2.5), backgroundColor: "#EBE8E8", width: RFPercentage(8), height: RFPercentage(8), maxWidth: RFPercentage(8), flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }} >
                            </TouchableOpacity>

                            <TouchableOpacity style={{ marginRight: RFPercentage(2.5), backgroundColor: "#EBE8E8", width: RFPercentage(8), height: RFPercentage(8), maxWidth: RFPercentage(8), flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }} >
                                <Badge style={{ marginBottom: -RFPercentage(1) }} status="error" size={RFPercentage(2.4)} >2</Badge>
                                <Image style={{ marginBottom: RFPercentage(1) }} resizeMode="cover" source={require("../../assets/ProfileGroup_2.png")} />
                            </TouchableOpacity>

                            <TouchableOpacity style={{ backgroundColor: "#EBE8E8", width: RFPercentage(8), height: RFPercentage(8), maxWidth: RFPercentage(8), flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }} >
                            </TouchableOpacity>

                        </View>
                    </View>

                </View>
            </ScrollView>
        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: Constants.statusBarHeight,
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        width: '100%'
    },
    scrollContainer: {
        flex: 1,
        width: "90%",
        backgroundColor: 'white',
    },
    subContainer: {
        backgroundColor: 'white',
        width: '100%',
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        // backgroundColor: 'pink',
        justifyContent: 'center',
        // marginBottom: RFPercentage(10)
    }
})

export default UserProfile;