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

function Profile(props) {

    const [selectedValue, setSelectedValue] = useState(null);
    const [selectedValue2, setSelectedValue2] = useState(null);
    const [selectedValue3, setSelectedValue3] = useState(null);
    const [selectedValue4, setSelectedValue4] = useState(null);
    const [selectedValue5, setSelectedValue5] = useState(null);

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

                    <View style={{ marginTop: RFPercentage(4), flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'center' }}>
                        <Text style={{ letterSpacing: RFPercentage(0.6), fontSize: RFPercentage(3.3), fontFamily: Platform.OS === 'ios' ? 'Verdana' : 'serif', color: colors.primary }} >SIML</Text>
                    </View>
                    <View style={{ marginTop: RFPercentage(2), flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'center' }}>
                        <Text style={{ letterSpacing: RFPercentage(0.3), fontSize: RFPercentage(2.5), color: 'black' }} >create your profile</Text>
                    </View>

                    {/* profile picture */}
                    <ImageBackground borderRadius={RFPercentage(10)} source={selectedImage} style={{ marginTop: RFPercentage(3), borderRadius: RFPercentage(10), width: RFPercentage(20), height: RFPercentage(20), borderColor: colors.primary, borderWidth: 1, flexDirection: 'column', alignItems: 'flex-end', justifyContent: 'flex-end' }}>
                        {/* <Image style={{ zIndex: -1 }} source={selectedImage} /> */}
                        <TouchableOpacity onPress={() => handleImage()} style={{ zIndex: 2, backgroundColor: 'white', borderRadius: RFPercentage(3.5), width: RFPercentage(7), height: RFPercentage(7), borderColor: colors.primary, borderWidth: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }} >
                            <MaterialCommunityIcons size={26} color="black" name="plus" />
                        </TouchableOpacity>
                    </ImageBackground>

                    {/*Custom Drop downs */}
                    <View style={{ marginTop: RFPercentage(15), width: "100%", flexDirection: 'column', alignItems: 'flex-end', justifyContent: 'flex-end' }} >
                        <MainPicker
                            items={[{ label: 'option1' }, { label: 'optio2n' }]}
                            selectedValue={selectedValue}
                            setSelectedValue={(item) => setSelectedValue(item)}
                        />
                        <MainPicker
                            items={[{ label: 'option1' }, { label: 'optio2n' }]}
                            selectedValue={selectedValue2}
                            setSelectedValue={(item) => setSelectedValue2(item)}
                        />
                        <MainPicker
                            items={[{ label: 'option1' }, { label: 'optio2n' }]}
                            selectedValue={selectedValue3}
                            setSelectedValue={(item) => setSelectedValue3(item)}
                        />
                        <MainPicker
                            items={[{ label: 'option1' }, { label: 'optio2n' }]}
                            selectedValue={selectedValue4}
                            setSelectedValue={(item) => setSelectedValue4(item)}
                        />
                        <MainPicker
                            items={[{ label: 'option1' }, { label: 'optio2n' }]}
                            selectedValue={selectedValue5}
                            setSelectedValue={(item) => setSelectedValue5(item)}
                        />
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
        width: "80%",
    },
    subContainer: {
        // backgroundColor: 'red',
        width: '100%',
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        // backgroundColor: 'pink',
        justifyContent: 'center',
        // marginBottom: RFPercentage(10)
    }
})

export default Profile;