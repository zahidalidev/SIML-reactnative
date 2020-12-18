import React, { useState } from 'react';
import { Button, Platform, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { RFPercentage } from 'react-native-responsive-fontsize';
import colors from '../config/colors'

function Login(props) {
    const [feildBackColor, setFeildBackColor] = useState('white')
    const [borderWidth, setBborderWidth] = useState(1.4)

    const [feildBackColor2, setFeildBackColor2] = useState('white')
    const [borderWidth2, setBborderWidth2] = useState(1.4)

    const [topMargin, setMargin] = useState(0)

    return (
        <View style={styles.container}>
            <StatusBar style="auto" backgroundColor='white' />
            {/* <ScrollView style={styles.scrollContainer} > */}
            <View style={[styles.subContainer, { marginTop: topMargin }]} >
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-end' }} >
                    <Text style={{ letterSpacing: RFPercentage(1.2), fontSize: RFPercentage(8), fontFamily: Platform.OS === 'ios' ? 'Verdana' : 'serif', color: colors.primary }} >SIML</Text>
                </View>

                <View style={{ flex: 1.1, width: "100%", flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }} >
                    <View style={{ backgroundColor: feildBackColor, borderWidth: borderWidth, borderColor: colors.darkGrey, width: '100%', alignItems: 'center', justifyContent: 'center' }} >
                        <TextInput
                            onFocus={() => {
                                setFeildBackColor(colors.lightPrimary)
                                setBborderWidth(0)
                                setMargin(Platform.OS === 'ios' ? -RFPercentage(65) : 0)

                            }}
                            onEndEditing={() => {
                                setFeildBackColor('white')
                                setBborderWidth(1.4)
                                setMargin(-RFPercentage(0))

                            }}
                            placeholder="name"
                            style={{ padding: 6, fontSize: RFPercentage(2.5) }}
                        />
                    </View>
                    <View style={{ marginTop: RFPercentage(1.5), backgroundColor: feildBackColor2, borderWidth: borderWidth2, borderColor: colors.darkGrey, width: '100%', alignItems: 'center', justifyContent: 'center' }} >
                        <TextInput
                            onFocus={() => {
                                setFeildBackColor2(colors.lightPrimary)
                                setBborderWidth2(0)
                                setMargin(Platform.OS === 'ios' ? -RFPercentage(65) : 0)
                            }}
                            onEndEditing={() => {
                                setFeildBackColor2('white')
                                setBborderWidth2(1.4)
                                setMargin(-RFPercentage(0))
                            }}
                            placeholder="phone number"
                            style={{ padding: 6, fontSize: RFPercentage(2.5) }}
                        />
                    </View>
                    <View style={{ elevation: 1, marginTop: RFPercentage(1.5), width: '100%', alignItems: 'center', justifyContent: 'center' }} >
                        <TouchableOpacity
                            style={{
                                backgroundColor: colors.grey,
                                shadowColor: '#000',
                                shadowOffset: { width: 1, height: 1 },
                                shadowOpacity: 0.4,
                                shadowRadius: 3,
                                elevation: 3,
                                width: '100%', alignItems: 'center', justifyContent: 'center'
                            }}
                            onPress={() => console.log("sign in")}
                        >
                            <Text style={{ letterSpacing: RFPercentage(0.3), color: '#686767', padding: 10, fontSize: RFPercentage(2.5) }} >send verification</Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </View>
            {/* </ScrollView> */}
        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        width: '100%'
    },
    scrollContainer: {
        // flex: 1,
        // backgroundColor: 'red',
    },
    subContainer: {
        width: '80%',
        flex: 10,
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: 'white',
        justifyContent: 'center',
        // marginBottom: RFPercentage(10)
    }
})

export default Login;