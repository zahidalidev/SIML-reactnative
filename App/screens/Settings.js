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

function Settings(props) {
    const [selectedImage, setImage] = useState(null)


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

                    <View style={{ width: '100%', marginTop: RFPercentage(4), flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start' }}>
                        <TouchableOpacity onPress={() => console.log('setting')} style={{ alignItems: 'flex-start', justifyContent: 'flex-start' }} >
                            <MaterialCommunityIcons size={RFPercentage(6)} color={colors.darkGrey} name="chevron-left" />
                        </TouchableOpacity>
                    </View>

                    <View style={{ marginTop: RFPercentage(2), flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'center' }}>
                        <Text style={{ fontSize: RFPercentage(2.2), color: colors.primary }} >SIML</Text>
                    </View>
                    {/* profile picture */}
                    <ImageBackground resizeMode="cover" borderRadius={RFPercentage(15)} source={selectedImage} style={{ marginTop: RFPercentage(3), borderRadius: RFPercentage(15), width: RFPercentage(30), height: RFPercentage(30), borderColor: "#979797", borderWidth: 1, flexDirection: 'column', alignItems: 'flex-end', justifyContent: 'flex-end' }}>
                        {/* <Image style={{ zIndex: -1 }} source={selectedImage} /> */}

                        <View style={{ margin: RFPercentage(1), zIndex: 2, backgroundColor: 'white', borderRadius: RFPercentage(4), width: RFPercentage(8), height: RFPercentage(8), flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }} >
                            <TouchableOpacity onPress={() => handleImage()} style={{ zIndex: 2, backgroundColor: '#D8D8D8', borderRadius: RFPercentage(4), width: RFPercentage(8), height: RFPercentage(8), borderColor: "#979797", borderWidth: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }} >
                                <MaterialCommunityIcons size={0} color={colors.darkGrey} name="pencil" />
                            </TouchableOpacity>
                        </View>
                    </ImageBackground>

                    <View style={{ marginTop: RFPercentage(5), marginBottom: RFPercentage(1), flexDirection: "row", width: '90%', alignItems: 'flex-start', justifyContent: 'flex-start' }} >
                        <View style={{ flexDirection: "row", marginTop: RFPercentage(0.3), backgroundColor: "#EBE8E8", borderRadius: 6, width: '100%', alignItems: 'flex-start', justifyContent: 'flex-start' }} >
                            <TextInput
                                placeholder="Edit user name"
                                style={{ padding: 6, paddingLeft: 10, fontSize: RFPercentage(2.1) }}
                                placeholderTextColor={colors.primary}
                            />
                        </ View>
                    </View>

                    <View style={{ marginBottom: RFPercentage(2), flexDirection: "row", width: '90%', alignItems: 'flex-start', justifyContent: 'flex-start' }} >
                        <View style={{ flexDirection: "row", marginTop: RFPercentage(0.3), backgroundColor: "#EBE8E8", borderRadius: 6, width: '100%', alignItems: 'flex-start', justifyContent: 'flex-start' }} >
                            <TextInput
                                placeholder="Edit location"
                                style={{ padding: 6, paddingLeft: 10, fontSize: RFPercentage(2.1) }}
                                placeholderTextColor={colors.primary}
                            />
                        </ View>
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

export default Settings;