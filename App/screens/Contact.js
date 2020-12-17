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
import ContactPicker from '../components/ContactPicker';

function Contact(props) {

    const [selectedValue, setSelectedValue] = useState(null);

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
            {/* <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollContainer} > */}
            <View style={styles.subContainer} >
                {/*Custom Drop downs components */}
                <View style={{ flex: 1, width: "100%", flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }} >
                    <ContactPicker
                        items={[{ label: 'option1' }, { label: 'optio2n' }, { label: 'optio2n' }, { label: 'optio2n' }, { label: 'optio2n' }, { label: 'optio2n' }, { label: 'optio2n' }]}
                        selectedValue={selectedValue}
                        setSelectedValue={(item) => setSelectedValue(item)}

                        numberOfColumns={1}
                        placeholder='ADD'
                    />
                </View>

            </View>
            {/* </ScrollView> */}
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

export default Contact;