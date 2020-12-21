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

function ProfileDetail(props) {
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
                            <MaterialCommunityIcons size={34} color={colors.darkGrey} name="settings" />
                        </TouchableOpacity>
                    </View>

                    {/* profile picture */}
                    <ImageBackground resizeMode="cover" borderRadius={RFPercentage(10)} source={selectedImage} style={{ marginTop: RFPercentage(3), borderRadius: RFPercentage(10), width: RFPercentage(17), height: RFPercentage(17), borderColor: colors.grey, borderWidth: 1, flexDirection: 'column', alignItems: 'flex-end', justifyContent: 'flex-end' }}>
                        {/* <Image style={{ zIndex: -1 }} source={selectedImage} /> */}

                        <View style={{ margin: -RFPercentage(1.5), zIndex: 2, backgroundColor: 'white', borderRadius: RFPercentage(4), width: RFPercentage(8), height: RFPercentage(8), flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }} >
                            <TouchableOpacity onPress={() => handleImage()} style={{ zIndex: 2, backgroundColor: 'white', borderRadius: RFPercentage(3), width: RFPercentage(6), height: RFPercentage(6), borderColor: colors.grey, borderWidth: 1.5, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }} >
                                <MaterialCommunityIcons size={26} color={colors.darkGrey} name="pencil" />
                            </TouchableOpacity>
                        </View>
                    </ImageBackground>
                    <View style={{ marginTop: RFPercentage(2), flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'center' }}>
                        <Text style={{ fontSize: RFPercentage(2.2), color: "#595858" }} >Tap to edit your profile</Text>
                    </View>

                    {/*Custom Drop downs components */}
                    <View style={{ marginTop: RFPercentage(8), width: "100%", flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center' }} >
                        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }} >
                            <TouchableOpacity style={{ maxWidth: "33.33%", flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }} >
                                <Image resizeMode="cover" style={{ width: RFPercentage(10), height: RFPercentage(10) }} source={require("../../assets/spoon.png")} />
                                <Text numberOfLines={1} style={{ fontSize: RFPercentage(1.8), marginTop: RFPercentage(1), color: "#595858" }} >Retairent</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ maxWidth: "33.33%", flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }} >
                                <Image resizeMode="cover" style={{ width: RFPercentage(10), height: RFPercentage(10) }} source={require("../../assets/light1.png")} />
                                <Text numberOfLines={1} style={{ fontSize: RFPercentage(1.8), marginTop: RFPercentage(1), color: "#595858" }} >Friend sent Siml to do</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ maxWidth: "33.33%", flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }} >
                                <Image resizeMode="cover" style={{ width: RFPercentage(10), height: RFPercentage(10) }} source={require("../../assets/message.png")} />
                                <Text numberOfLines={1} style={{ fontSize: RFPercentage(1.8), marginTop: RFPercentage(1), color: "#595858" }} >Chat to friend group</Text>

                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity style={{ width: "33.33%", marginTop: RFPercentage(3), flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }} >
                            <Image resizeMode="cover" style={{ width: RFPercentage(10), height: RFPercentage(10) }} source={require("../../assets/home.png")} />
                            <Text numberOfLines={1} style={{ fontSize: RFPercentage(1.8), marginTop: RFPercentage(1), color: "#595858" }} >Event</Text>
                        </TouchableOpacity>
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

export default ProfileDetail;