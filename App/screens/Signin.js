import React from 'react';
import { Button, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { RFPercentage } from 'react-native-responsive-fontsize';
import colors from '../config/colors'

function Signin(props) {
    return (
        <View style={styles.container}>
            <StatusBar style="auto" backgroundColor='white' />
            {/* <ScrollView style={styles.scrollContainer} > */}
            <View style={styles.subContainer} >
                <View style={{ alignItems: 'center', justifyContent: 'center' }} >
                    <Text style={{ letterSpacing: RFPercentage(1.2), fontSize: RFPercentage(9), fontFamily: Platform.OS === 'ios' ? 'Verdana' : 'serif', color: colors.primary }} >SIML</Text>
                </View>
                <View style={{ elevation: 1, marginTop: RFPercentage(2.3), width: '100%', alignItems: 'center', justifyContent: 'center' }} >
                    <TouchableOpacity
                        style={{
                            backgroundColor: '#fff',
                            shadowColor: '#000',
                            shadowOffset: { width: 1, height: 1 },
                            shadowOpacity: 0.4,
                            shadowRadius: 3,
                            elevation: 3,
                            width: '100%', alignItems: 'center', justifyContent: 'center'
                        }}
                        onPress={() => console.log("sign in")}
                    >
                        <Text style={{ letterSpacing: RFPercentage(0.3), color: '#686767', padding: 10, fontSize: RFPercentage(2.5) }} >sign in</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ marginTop: RFPercentage(0.4), width: '100%', alignItems: 'center', justifyContent: 'center' }} >
                    <TouchableOpacity style={{ width: '100%', alignItems: 'center', justifyContent: 'center' }} >
                        <Text style={{ letterSpacing: RFPercentage(0.3), color: '#686767', padding: 10, fontSize: RFPercentage(2) }} >create an account</Text>
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
        width: '85%',
        flex: 10,
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: 'white',
        justifyContent: 'flex-end',
        marginBottom: RFPercentage(10)
    }
})

export default Signin;