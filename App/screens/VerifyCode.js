import React, { useState } from 'react';
import { Button, Platform, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { RFPercentage } from 'react-native-responsive-fontsize';
import colors from '../config/colors'

function VerifyCode(props) {
    const [feildBackColor3, setFeildBackColor3] = useState('white')
    const [borderWidth3, setBborderWidth3] = useState(1.4)

    const [feildBackColor4, setFeildBackColor4] = useState('white')
    const [borderWidth4, setBborderWidth4] = useState(1.4)

    const [topMargin, setMargin] = useState(0)

    return (
        <View style={styles.container}>
            <StatusBar style="auto" backgroundColor='white' />
            {/* <ScrollView style={styles.scrollContainer} > */}
            <View style={[styles.subContainer, { marginTop: topMargin }]} >
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-end' }} >
                    <Text style={{ letterSpacing: RFPercentage(1.2), fontSize: RFPercentage(8), fontFamily: Platform.OS === 'ios' ? 'Verdana' : 'serif', color: colors.primary }} >SIML</Text>
                </View>

                <View style={{ flex: 1.1, width: "100%", flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start' }} >
                    <View style={{ marginTop: RFPercentage(9), backgroundColor: feildBackColor3, borderRightWidth: 1, borderTopWidth: borderWidth3, borderColor: colors.darkGrey, width: '100%', alignItems: 'flex-start', justifyContent: 'center' }} >
                        <TextInput
                            onFocus={() => {
                                setFeildBackColor3(colors.lightPrimary)
                                setBborderWidth3(0)
                                setMargin(Platform.OS === 'ios' ? -RFPercentage(35) : 0)
                            }}
                            onEndEditing={() => {
                                setFeildBackColor3('white')
                                setBborderWidth3(1.4)
                                setMargin(-RFPercentage(0))
                            }}
                            placeholder="verification code"
                            style={{ padding: 6, paddingLeft: 13, fontSize: RFPercentage(2.5) }}
                        />
                    </View>
                    <View style={{ elevation: 1, marginTop: RFPercentage(10), width: '100%', alignItems: 'center', justifyContent: 'center' }} >
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
                            onPress={() => console.log("sign in")}
                        >
                            <Text style={{ letterSpacing: RFPercentage(0.4), color: colors.primary, padding: 10, fontSize: RFPercentage(2.2) }} >verify me</Text>
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
        width: '65%',
        flex: 10,
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: 'white',
        justifyContent: 'center',
        // marginBottom: RFPercentage(10)
    }
})

export default VerifyCode;