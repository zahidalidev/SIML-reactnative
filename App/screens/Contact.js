import React, { useState } from 'react';
import { Button, Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View, Switch, Platform } from 'react-native';
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

    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    const [selectedValue, setSelectedValue] = useState(null);
    const [selectedValue2, setSelectedValue2] = useState(null);

    const [feildBackColor4, setFeildBackColor4] = useState('white')
    const [borderWidth4, setBborderWidth4] = useState(1.4)
    const [topMargin, setMargin] = useState(RFPercentage(8))



    // console.log(selectedValue)
    return (
        <View style={styles.container}>
            <StatusBar style="auto" backgroundColor='white' />
            <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollContainer} >
                <View style={[styles.subContainer, { marginTop: topMargin }]} >


                    <View style={{ flexDirection: "row", width: '100%', alignItems: 'center', justifyContent: 'center', flex: 1 }} >
                        <Text style={{ color: colors.primary, fontSize: RFPercentage(3) }} >SIML</Text>
                    </View>
                    <View style={{ flexDirection: "row", width: '91%', alignItems: 'center', justifyContent: 'flex-start', flex: 1 }} >
                        {/* profile picture */}
                        <Image style={{ marginTop: RFPercentage(3), borderRadius: RFPercentage(13), width: RFPercentage(26), height: RFPercentage(26) }} borderRadius={RFPercentage(13)} source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxxaLKZOlv4hNd4MW8kY-WbKixRDSwQ3b_rw&usqp=CAU" }} />
                        <View style={{ flexDirection: 'column', flex: 1, alignItems: 'flex-end', marginRight: RFPercentage(1.5) }} >
                            <Text style={{ color: colors.primary, fontSize: RFPercentage(2.2) }} >user name</Text>
                            <Text style={{ color: colors.primary, fontSize: RFPercentage(2.2) }} >user name</Text>
                            <Text style={{ color: colors.primary, fontSize: RFPercentage(2.2) }} >user name</Text>
                            <Text style={{ color: colors.primary, fontSize: RFPercentage(2.2) }} >user name</Text>
                            <Text style={{ color: colors.primary, fontSize: RFPercentage(2.2) }} >user name</Text>
                        </View>
                    </View>


                    <View style={{ flexDirection: "column", width: '80%', alignItems: 'flex-start', justifyContent: 'flex-end', flex: 1 }} >
                        <Text style={{ color: colors.primary, padding: RFPercentage(2.8), paddingLeft: 0, fontSize: RFPercentage(2.5) }} >location</Text>
                        <View style={{ flexDirection: "column", marginTop: RFPercentage(0.3), backgroundColor: "#EBE8E8", borderRadius: 6, width: '100%', alignItems: 'flex-start', justifyContent: 'center' }} >
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
                                style={{ padding: 6, fontSize: RFPercentage(2.5) }}
                            />
                        </ View>
                    </View>
                    <View style={{ flexDirection: "column", width: '80%', alignItems: 'flex-start', justifyContent: 'flex-end', flex: 1 }} >
                        <Text style={{ color: colors.primary, padding: RFPercentage(2.8), paddingLeft: 0, fontSize: RFPercentage(2.5) }} >budget</Text>
                        <View style={{ flexDirection: "row", marginTop: RFPercentage(0.3), width: '100%', alignItems: 'flex-start', justifyContent: 'center' }} >
                            <View style={{ flex: 1, backgroundColor: "#EBE8E8", borderRadius: 6, marginRight: RFPercentage(2.5), justifyContent: 'center', alignItems: 'center' }} >
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
                                    placeholderTextColor={colors.primary}
                                    placeholder={"£"}
                                    style={{ padding: 6, fontSize: RFPercentage(2.5), justifyContent: "center", alignItems: 'center' }}
                                />
                            </View>
                            <View style={{ flex: 1, backgroundColor: "#EBE8E8", borderRadius: 6, marginRight: RFPercentage(2.5), justifyContent: 'center', alignItems: 'center' }} >
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
                                    placeholderTextColor={colors.primary}
                                    placeholder={"££"}
                                    style={{ padding: 6, fontSize: RFPercentage(2.5), justifyContent: "center", alignItems: 'center' }}
                                />
                            </View>
                            <View style={{ flex: 1, backgroundColor: "#EBE8E8", borderRadius: 6, justifyContent: 'center', alignItems: 'center' }} >
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
                                    placeholderTextColor={colors.primary}
                                    placeholder={"£££"}
                                    style={{ padding: 6, fontSize: RFPercentage(2.5), justifyContent: "center", alignItems: 'center' }}
                                />
                            </View>
                        </ View>
                    </View>

                    {/* time limit */}
                    <View style={{ flexDirection: "column", width: '80%', alignItems: 'flex-start', justifyContent: 'flex-end', flex: 1 }} >
                        <View style={{ flex: 1, flexDirection: "row" }} >
                            <Text style={{ color: colors.primary, padding: RFPercentage(2.8), paddingLeft: 0, fontSize: RFPercentage(2.5) }} >time limit</Text>
                            <Switch
                                trackColor={{ false: "#EBE8E8", true: "#EBE8E8" }}
                                thumbColor={isEnabled ? colors.primary : "#f4f3f4"}
                                ios_backgroundColor="#EBE8E8"
                                onValueChange={toggleSwitch}
                                value={isEnabled}
                            />
                        </View>
                        <View style={{ flexDirection: "row", marginTop: RFPercentage(0.3), width: '100%', alignItems: 'flex-start', justifyContent: 'center' }} >
                            <View style={{ flex: 1, backgroundColor: "#EBE8E8", borderRadius: 6, marginRight: RFPercentage(2.5), justifyContent: 'center', alignItems: 'center' }} >
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
                                    placeholderTextColor={colors.primary}
                                    placeholder={"H"}
                                    style={{ height: RFPercentage(9), padding: 6, fontSize: RFPercentage(2.5), justifyContent: "center", alignItems: 'center' }}
                                />
                            </View>
                            <View style={{ flex: 1, backgroundColor: "#EBE8E8", borderRadius: 6, marginRight: RFPercentage(2.5), justifyContent: 'center', alignItems: 'center' }} >
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
                                    placeholderTextColor={colors.primary}
                                    placeholder={"M"}
                                    style={{ height: RFPercentage(9), padding: 6, fontSize: RFPercentage(2.5), justifyContent: "center", alignItems: 'center' }}
                                />
                            </View>
                            <View style={{ flex: 1, backgroundColor: "#EBE8E8", borderRadius: 6, justifyContent: 'center', alignItems: 'center' }} >
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
                                    placeholderTextColor={colors.primary}
                                    placeholder={"S"}
                                    style={{ height: RFPercentage(9), padding: 6, fontSize: RFPercentage(2.5), justifyContent: "center", alignItems: 'center' }}
                                />
                            </View>
                        </ View>
                    </View>


                    {/*Custom Drop downs components */}
                    {/* <View style={{ width: "100%", flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'flex-start', flex: 2, marginTop: RFPercentage(5) }} >
                        <ContactPicker
                        selectedItem={selectedValue}
                        setSelectedValue={(item) => setSelectedValue(item)}
                        width="20%"
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
                    </View> */}

                    <View style={{ marginBottom: RFPercentage(5), elevation: 1, marginTop: RFPercentage(4), width: '100%', alignItems: 'center', justifyContent: 'center', flex: 2, width: '80%' }} >
                        <TouchableOpacity
                            style={{
                                // backgroundColor: colors.,
                                backgroundColor: '#EBE8E8',
                                shadowColor: '#000',
                                shadowOffset: { width: 1, height: 1 },
                                shadowOpacity: 0.4,
                                shadowRadius: 1,
                                elevation: 3,
                                width: '100%', alignItems: 'center', justifyContent: 'center', height: RFPercentage(9)
                            }}
                            onPress={() => console.log('send')}
                        >
                            <Text style={{ letterSpacing: RFPercentage(0.3), color: colors.primary, padding: 10, fontSize: RFPercentage(2.2) }} >swipe</Text>
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
        // backgroundColor: 'red',
        width: '100%',
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: 'white',
        justifyContent: 'center',
        // marginBottom: RFPercentage(10)
    }
})

export default Contact;