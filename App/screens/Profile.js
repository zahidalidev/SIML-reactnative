import React, { useState } from 'react';
import { Button, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View, Picker } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { RFPercentage } from 'react-native-responsive-fontsize';
import Constants from 'expo-constants'
import { MaterialCommunityIcons } from "@expo/vector-icons"
import { LinearGradient } from 'expo-linear-gradient';

import colors from '../config/colors'

function Profile(props) {
    const [feildBackColor, setFeildBackColor] = useState('white')
    const [borderWidth, setBborderWidth] = useState(1.4)

    const [feildBackColor2, setFeildBackColor2] = useState('white')
    const [borderWidth2, setBborderWidth2] = useState(1.4)

    const [selectedValue, setSelectedValue] = useState("option");

    return (
        <View style={styles.container}>
            <StatusBar style="auto" backgroundColor='white' />
            <ScrollView style={styles.scrollContainer} >
                <View style={styles.subContainer} >

                    <View style={{ marginTop: RFPercentage(4), flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'center' }}>
                        <Text style={{ letterSpacing: RFPercentage(0.6), fontSize: RFPercentage(3.3), fontFamily: 'serif', color: colors.primary }} >SIML</Text>
                    </View>
                    <View style={{ marginTop: RFPercentage(2), flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'center' }}>
                        <Text style={{ letterSpacing: RFPercentage(0.3), fontSize: RFPercentage(2.5), color: 'black' }} >create your profile</Text>
                    </View>

                    {/* profile picture */}
                    <View style={{ marginTop: RFPercentage(3), borderRadius: RFPercentage(10), width: RFPercentage(20), height: RFPercentage(20), borderColor: colors.primary, borderWidth: 1, flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'flex-end' }}>
                        <TouchableOpacity style={{ backgroundColor: 'white', borderRadius: RFPercentage(3.5), width: RFPercentage(7), height: RFPercentage(7), borderColor: colors.primary, borderWidth: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }} >
                            <MaterialCommunityIcons size={26} color="black" name="plus" />
                        </TouchableOpacity>
                    </View>

                    {/* Drop downs */}
                    <View style={{ marginTop: RFPercentage(15), width: "100%", flexDirection: 'column', alignItems: 'flex-end', justifyContent: 'flex-end' }} >
                        <LinearGradient colors={['transparent', '#e8e8e8']} style={{
                            flex: 1,
                            marginTop: RFPercentage(1.5),
                            width: "100%",
                            alignItems: "center",
                            // backgroundColor: colors.grey
                        }}>
                            <Picker
                                selectedValue={selectedValue}
                                mode="dropdown"
                                style={{
                                    transform: [
                                        { scaleX: 1.4 },
                                        { scaleY: 1.4 },
                                    ], height: RFPercentage(6), width: "70%", color: colors.darkGrey
                                }}
                                onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                            >
                                <Picker.Item label="option" value="option" />
                                <Picker.Item label="option2" value="option2" />
                                <Picker.Item label="option3" value="option3" />
                                <Picker.Item label="option4" value="option4" />
                            </Picker>

                        </LinearGradient>
                        <LinearGradient colors={['transparent', '#e8e8e8']} style={{
                            flex: 1,
                            marginTop: RFPercentage(1.5),
                            width: "100%",
                            alignItems: "center",
                            // backgroundColor: colors.grey
                        }}>
                            <Picker
                                selectedValue={selectedValue}
                                mode="dropdown"
                                style={{
                                    transform: [
                                        { scaleX: 1.4 },
                                        { scaleY: 1.4 },
                                    ], height: RFPercentage(6), width: "70%", color: colors.darkGrey
                                }}
                                onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                            >
                                <Picker.Item label="option" value="option" />
                                <Picker.Item label="option2" value="option2" />
                                <Picker.Item label="option3" value="option3" />
                                <Picker.Item label="option4" value="option4" />
                            </Picker>

                        </LinearGradient>
                        <LinearGradient colors={['transparent', '#e8e8e8']} style={{
                            flex: 1,
                            marginTop: RFPercentage(1.5),
                            width: "100%",
                            alignItems: "center",
                            // backgroundColor: colors.grey
                        }}>
                            <Picker
                                selectedValue={selectedValue}
                                mode="dropdown"
                                style={{
                                    transform: [
                                        { scaleX: 1.4 },
                                        { scaleY: 1.4 },
                                    ], height: RFPercentage(6), width: "70%", color: colors.darkGrey
                                }}
                                onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                            >
                                <Picker.Item label="option" value="option" />
                                <Picker.Item label="option2" value="option2" />
                                <Picker.Item label="option3" value="option3" />
                                <Picker.Item label="option4" value="option4" />
                            </Picker>

                        </LinearGradient>
                        <LinearGradient colors={['transparent', '#e8e8e8']} style={{
                            flex: 1,
                            marginTop: RFPercentage(1.5),
                            width: "100%",
                            alignItems: "center",
                            // backgroundColor: colors.grey
                        }}>
                            <Picker
                                selectedValue={selectedValue}
                                mode="dropdown"
                                style={{
                                    transform: [
                                        { scaleX: 1.4 },
                                        { scaleY: 1.4 },
                                    ], height: RFPercentage(6), width: "70%", color: colors.darkGrey
                                }}
                                onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                            >
                                <Picker.Item label="option" value="option" />
                                <Picker.Item label="option2" value="option2" />
                                <Picker.Item label="option3" value="option3" />
                                <Picker.Item label="option4" value="option4" />
                            </Picker>

                        </LinearGradient>
                        <LinearGradient colors={['transparent', '#e8e8e8']} style={{
                            flex: 1,
                            marginTop: RFPercentage(1.5),
                            width: "100%",
                            alignItems: "center",
                            // backgroundColor: colors.grey
                        }}>
                            <Picker
                                selectedValue={selectedValue}
                                mode="dropdown"
                                style={{
                                    transform: [
                                        { scaleX: 1.4 },
                                        { scaleY: 1.4 },
                                    ], height: RFPercentage(6), width: "70%", color: colors.darkGrey
                                }}
                                onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                            >
                                <Picker.Item label="option" value="option" />
                                <Picker.Item label="option2" value="option2" />
                                <Picker.Item label="option3" value="option3" />
                                <Picker.Item label="option4" value="option4" />
                            </Picker>

                        </LinearGradient>
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