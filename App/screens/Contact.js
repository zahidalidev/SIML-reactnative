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
import TimePicker from '../components/TimePicker';

function Contact(props) {

    const [selectedValue, setSelectedValue] = useState(null);
    const [selectedValue2, setSelectedValue2] = useState(null);

    const [feildBackColor4, setFeildBackColor4] = useState('white')
    const [borderWidth4, setBborderWidth4] = useState(1.4)
    const [topMargin, setMargin] = useState(RFPercentage(8))



    // console.log(selectedValue)
    return (
        <View style={styles.container}>
            <StatusBar style="auto" backgroundColor='white' />
            {/* <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollContainer} > */}
            <View style={[styles.subContainer, { marginTop: topMargin }]} >

                <View style={{ flexDirection: "column", width: '80%', alignItems: 'flex-start', justifyContent: 'flex-end', flex: 1 }} >
                    <Text style={{ color: "#939292", padding: 6, fontSize: RFPercentage(2.5) }} >location:</Text>
                    <View style={{ flexDirection: "column", marginTop: RFPercentage(0.3), backgroundColor: feildBackColor4, borderRightWidth: borderWidth4, borderBottomWidth: borderWidth4, borderColor: colors.darkGrey, width: '100%', alignItems: 'flex-start', justifyContent: 'center' }} >
                        <TextInput
                            onFocus={() => {
                                setFeildBackColor4(colors.lightPrimary)
                                setBborderWidth4(0)
                                setMargin(Platform.OS === 'ios' ? -RFPercentage(22) : RFPercentage(8))
                            }}
                            onEndEditing={() => {
                                setFeildBackColor4('white')
                                setBborderWidth4(1.4)
                                setMargin(RFPercentage(8))
                            }}
                            placeholder="location"
                            style={{ padding: 6, fontSize: RFPercentage(2.5) }}
                        />
                    </ View>
                </View>


                {/*Custom Drop downs components */}
                <View style={{ width: "100%", flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'flex-start', flex: 2, marginTop: RFPercentage(5) }} >
                    <ContactPicker
                        items={[{ label: 'option1' }, { label: 'optio2n' }, { label: 'optio2n' }, { label: 'optio2n' }, { label: 'optio2n' }, { label: 'optio2n' }, { label: 'optio2n' }]}
                        selectedItem={selectedValue}
                        setSelectedValue={(item) => setSelectedValue(item)}
                        width="40%"
                        numberOfColumns={1}
                        placeholder='ADD'
                        icon="plus"
                    />
                    <TimePicker
                        items={[{ label: '2 min' }, { label: '4 min' }, { label: '6 min' }, { label: '8 min' }, { label: '10 min' }]}
                        selectedItem={selectedValue2}
                        setSelectedValue={(item) => setSelectedValue2(item)}
                        width="80%"
                        numberOfColumns={1}
                        placeholder='time'
                        icon="chevron-down"
                    />
                </View>

                <View style={{ elevation: 1, marginTop: RFPercentage(10), width: '100%', alignItems: 'center', justifyContent: 'center', flex: 2, width: '80%' }} >
                    <TouchableOpacity
                        style={{
                            // backgroundColor: colors.,
                            backgroundColor: '#fff',
                            shadowColor: '#000',
                            shadowOffset: { width: 1, height: 1 },
                            shadowOpacity: 0.4,
                            shadowRadius: 1,
                            elevation: 3,
                            width: '100%', alignItems: 'center', justifyContent: 'center'
                        }}
                        onPress={() => console.log('send')}
                    >
                        <Text style={{ letterSpacing: RFPercentage(0.3), color: colors.primary, padding: 10, fontSize: RFPercentage(2.2) }} >send</Text>
                    </TouchableOpacity>
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