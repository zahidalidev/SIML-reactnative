import React from 'react';
import { Button, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { RFPercentage } from 'react-native-responsive-fontsize';
import colors from '../config/colors'

function SignUp({ navigation }) {
    return (
        <View style={styles.container}>
            <StatusBar style="auto" backgroundColor='white' />
            {/* <ScrollView style={styles.scrollContainer} > */}
            <View style={styles.subContainer} >
                <View style={{ alignItems: 'center', justifyContent: 'center' }} >
                    <Text style={{ letterSpacing: RFPercentage(1.2), fontSize: RFPercentage(9), fontFamily: Platform.OS === 'ios' ? 'Verdana' : 'serif', color: colors.primary }} >SIML</Text>
                </View>

                <View style={{ elevation: 1, marginTop: RFPercentage(4.5), width: '100%', alignItems: 'center', justifyContent: 'center' }} >
                    <TouchableOpacity
                        style={{
                            backgroundColor: '#fff',
                            shadowColor: '#000',
                            shadowOffset: { width: 1, height: 1 },
                            shadowOpacity: 0,
                            shadowRadius: 1,
                            elevation: 3,
                            borderLeftWidth: 1,
                            borderBottomWidth: 1,
                            borderColor: '#848484',
                            width: '100%', alignItems: 'center', justifyContent: 'center'
                        }}
                        onPress={() => navigation.navigate('SignUpWithEmail')}
                    >
                        <Text style={{ letterSpacing: RFPercentage(0.4), color: '#686767', padding: 10, fontSize: RFPercentage(2.2) }} >sign up with email</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ elevation: 1, marginTop: RFPercentage(2.3), width: '100%', alignItems: 'center', justifyContent: 'center' }} >
                    <TouchableOpacity
                        style={{
                            backgroundColor: '#fff',
                            shadowColor: '#000',
                            shadowOffset: { width: 1, height: 1 },
                            shadowOpacity: 0,
                            shadowRadius: 1,
                            elevation: 3,
                            borderLeftWidth: 1,
                            borderBottomWidth: 1,
                            borderColor: '#848484',
                            width: '100%', alignItems: 'center', justifyContent: 'center'
                        }}
                        onPress={() => navigation.navigate('SignUpWithNumber')}
                    >
                        <Text style={{ letterSpacing: RFPercentage(0.3), color: '#686767', padding: 10, fontSize: RFPercentage(2) }} >sign up with phone</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ elevation: 1, marginTop: RFPercentage(3), width: '100%', alignItems: 'center', justifyContent: 'center' }} >
                    <TouchableOpacity
                        style={{
                            backgroundColor: '#1f79e0',
                            width: '100%', alignItems: 'center', justifyContent: 'center'
                        }}
                        onPress={() => console.log("sign in")}
                    >
                        <Text style={{ letterSpacing: RFPercentage(0.3), color: 'white', padding: 10, fontSize: RFPercentage(2) }} >sign up with Facebook</Text>
                    </TouchableOpacity>
                </View>

                <View style={{ flexDirection: 'row', marginTop: RFPercentage(2), width: '100%', alignItems: 'center', justifyContent: 'center' }} >
                    <Image resizeMode="cover" style={{ maxHeight: 30, maxWidth: 30 }} source={require("../../assets/googleIcon.png")} />
                    <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center' }} >
                        <Text style={{ letterSpacing: RFPercentage(0.3), color: '#686767', padding: 10, fontSize: RFPercentage(2) }} >sign in with Google</Text>
                    </TouchableOpacity>
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
        justifyContent: 'flex-end',
        marginBottom: RFPercentage(10)
    }
})

export default SignUp;