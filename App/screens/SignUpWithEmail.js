import React, { useState } from 'react';
import { Button, Platform, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { RFPercentage } from 'react-native-responsive-fontsize';
import colors from '../config/colors'

function SignUpWithEmail(props) {
    const [feildBackColor, setFeildBackColor] = useState('white')
    const [borderWidth, setBborderWidth] = useState(1.4)

    const [feildBackColor2, setFeildBackColor2] = useState('white')
    const [borderWidth2, setBborderWidth2] = useState(1.4)

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
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }} >
                    <Text style={{ marginTop: RFPercentage(8), letterSpacing: RFPercentage(1.2), fontSize: RFPercentage(8), fontFamily: Platform.OS === 'ios' ? 'Verdana' : 'serif', color: colors.primary }} >SIML</Text>
                </View>

                <View style={{ flex: 1.1, width: "100%", flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start' }} >
                    <View style={{ backgroundColor: feildBackColor, borderTopWidth: borderWidth, borderRightWidth: borderWidth, borderColor: colors.darkGrey, width: '100%', alignItems: 'flex-start', justifyContent: 'center' }} >
                        <TextInput
                            onFocus={() => {
                                setFeildBackColor(colors.lightPrimary)
                                setBborderWidth(0)
                                setMargin(Platform.OS === 'ios' ? -RFPercentage(15) : 0)

                            }}
                            onEndEditing={() => {
                                setFeildBackColor('white')
                                setBborderWidth(1.4)
                                setMargin(-RFPercentage(0))

                            }}
                            placeholder="email"
                            style={{ padding: 6, paddingLeft: 13, fontSize: RFPercentage(2.5) }}
                        />
                    </View>
                    <View style={{ marginTop: RFPercentage(2.7), backgroundColor: feildBackColor2, borderTopWidth: borderWidth2, borderRightWidth: borderWidth2, borderColor: colors.darkGrey, width: '100%', alignItems: 'flex-start', justifyContent: 'center' }} >
                        <TextInput
                            onFocus={() => {
                                setFeildBackColor2(colors.lightPrimary)
                                setBborderWidth2(0)
                                setMargin(Platform.OS === 'ios' ? -RFPercentage(15) : 0)
                            }}
                            onEndEditing={() => {
                                setFeildBackColor2('white')
                                setBborderWidth2(1.4)
                                setMargin(-RFPercentage(0))
                            }}
                            placeholder="confirm email"
                            style={{ padding: 6, paddingLeft: 13, fontSize: RFPercentage(2.5) }}
                        />
                    </View>
                    <View style={{ marginTop: RFPercentage(2.7), backgroundColor: feildBackColor3, borderRightWidth: borderWidth3, borderColor: colors.darkGrey, width: '100%', alignItems: 'flex-start', justifyContent: 'center' }} >
                        <TextInput
                            onFocus={() => {
                                setFeildBackColor3(colors.lightPrimary)
                                setBborderWidth3(0)
                                setMargin(Platform.OS === 'ios' ? -RFPercentage(15) : 0)
                            }}
                            onEndEditing={() => {
                                setFeildBackColor3('white')
                                setBborderWidth3(1.4)
                                setMargin(-RFPercentage(0))
                            }}
                            placeholder="password"
                            style={{ padding: 6, paddingLeft: 13, fontSize: RFPercentage(2.5) }}
                        />
                    </View>
                    <View style={{ flexDirection: "column", marginTop: RFPercentage(3), width: '100%', alignItems: 'flex-start', justifyContent: 'center' }} >
                        <Text style={{ color: "#939292", padding: 6, fontSize: RFPercentage(2.5) }} >date of birth:</Text>
                        <View style={{ flexDirection: "column", marginTop: RFPercentage(0.3), backgroundColor: feildBackColor4, borderRightWidth: borderWidth4, borderBottomWidth: borderWidth4, borderColor: colors.darkGrey, width: '100%', alignItems: 'flex-start', justifyContent: 'center' }} >
                            <TextInput
                                onFocus={() => {
                                    setFeildBackColor4(colors.lightPrimary)
                                    setBborderWidth4(0)
                                    setMargin(Platform.OS === 'ios' ? -RFPercentage(22) : 0)
                                }}
                                onEndEditing={() => {
                                    setFeildBackColor4('white')
                                    setBborderWidth4(1.4)
                                    setMargin(-RFPercentage(0))
                                }}
                                placeholder="m/d/y"
                                style={{ padding: 6, fontSize: RFPercentage(2.5) }}
                            />
                        </ View>
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
                            <Text style={{ letterSpacing: RFPercentage(0.3), color: colors.primary, padding: 10, fontSize: RFPercentage(2.2) }} >sign up</Text>
                        </TouchableOpacity>
                    </View>
                </View>


            </View>
            <View style={{ marginBottom: RFPercentage(3), flexDirection: 'column', marginTop: Platform.OS === 'ios' ? RFPercentage(20) : RFPercentage(15), width: '90%', alignItems: 'center', justifyContent: 'center' }} >
                <Text style={{ marginBottom: -RFPercentage(1.6), letterSpacing: RFPercentage(0.2), color: '#686767', padding: 10, fontSize: RFPercentage(2) }} >by clicking sign up you are agree to</Text>
                <View style={{ flexDirection: 'row' }} >
                    <Text style={{ letterSpacing: RFPercentage(0.3), color: '#686767', fontSize: RFPercentage(2) }} >SIML's</Text>
                    <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center' }} >
                        <Text style={{ borderColor: colors.primary, borderBottomWidth: 1, color: colors.primary, letterSpacing: RFPercentage(0.4), paddingBottom: 1, marginLeft: 7, paddingRight: 1, fontSize: RFPercentage(2) }} >terms and conditions</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center' }} >
                    <Text style={{ borderColor: colors.primary, borderBottomWidth: 1, color: colors.primary, letterSpacing: RFPercentage(0.4), paddingTop: RFPercentage(1.5), paddingBottom: 1, marginLeft: 7, paddingRight: 1, fontSize: RFPercentage(2) }} >learn more</Text>
                </TouchableOpacity>
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

export default SignUpWithEmail;