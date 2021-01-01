import React, { useState } from 'react';
import { Button, Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View, ImageBackground, Platform } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { StatusBar } from 'expo-status-bar';
import { RFPercentage } from 'react-native-responsive-fontsize';
import Constants from 'expo-constants'
import { MaterialCommunityIcons } from "@expo/vector-icons"

import colors from '../config/colors'

function CreateGroupNameImage(props) {
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
                    <ImageBackground resizeMode="cover" borderRadius={RFPercentage(11)} source={selectedImage} style={{ marginTop: RFPercentage(3), borderRadius: RFPercentage(11), width: RFPercentage(22), height: RFPercentage(22), borderColor: "#979797", borderWidth: 1, flexDirection: 'column', alignItems: 'flex-end', justifyContent: 'flex-end' }}>
                        {/* <Image style={{ zIndex: -1 }} source={selectedImage} /> */}

                        <View style={{ margin: RFPercentage(0.5), zIndex: 2, backgroundColor: 'white', borderRadius: RFPercentage(3.5), width: RFPercentage(7), height: RFPercentage(7), flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }} >
                            <TouchableOpacity onPress={() => handleImage()} style={{ zIndex: 2, backgroundColor: '#D8D8D8', borderRadius: RFPercentage(3.5), width: RFPercentage(7), height: RFPercentage(7), borderColor: "#979797", borderWidth: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }} >
                                <MaterialCommunityIcons size={0} color={colors.darkGrey} name="pencil" />
                            </TouchableOpacity>
                        </View>
                    </ImageBackground>

                    <View style={{ marginTop: RFPercentage(16), flexDirection: "column", width: '90%', alignItems: 'flex-start', justifyContent: 'flex-end', flex: 1 }} >
                        <Text style={{ color: colors.primary, padding: RFPercentage(2.8), paddingLeft: 0, fontSize: RFPercentage(2) }} >Create group name</Text>
                    </View>

                    <View style={{ marginBottom: RFPercentage(1), flexDirection: "row", width: '90%', alignItems: 'flex-start', justifyContent: 'flex-start' }} >
                        <View style={{ flexDirection: "row", marginTop: RFPercentage(0.3), backgroundColor: "#EBE8E8", borderRadius: 6, width: '100%', alignItems: 'flex-start', justifyContent: 'flex-start' }} >
                            <TextInput
                                style={{ padding: 6, paddingLeft: 10, fontSize: RFPercentage(2.1) }}
                                placeholderTextColor={colors.primary}
                            />
                        </ View>
                    </View>

                    <View style={{ marginBottom: RFPercentage(5), elevation: 1, marginTop: RFPercentage(0.2), width: '100%', alignItems: 'center', justifyContent: 'center', flex: 2, width: '80%' }} >
                        <TouchableOpacity
                            style={{
                                // backgroundColor: colors.,
                                backgroundColor: '#EBE8E8',
                                shadowColor: '#000',
                                shadowOffset: { width: 1, height: 1 },
                                shadowOpacity: 0.4,
                                shadowRadius: 1,
                                elevation: 3,
                                width: '60%', alignItems: 'center', justifyContent: 'center', height: RFPercentage(5.2)
                            }}
                            onPress={() => console.log('send')}
                        >
                            <Text style={{ letterSpacing: RFPercentage(0.3), color: colors.primary, padding: 10, fontSize: RFPercentage(2.2) }} >create group</Text>
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

export default CreateGroupNameImage;