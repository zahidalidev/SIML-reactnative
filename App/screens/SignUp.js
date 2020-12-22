import React, { useEffect, Component, useState } from 'react';
import { Button, Image, NativeModules, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { RFPercentage } from 'react-native-responsive-fontsize';
import * as Facebook from 'expo-facebook';
import * as Google from 'expo-google-app-auth';
import firebase from "firebase"
import { AnimatedModal } from "react-native-modal-animated";

import colors from '../config/colors'
import { firebaseConfig } from "../config/firebaseConfig"
import { clockRunning } from 'react-native-reanimated';
if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig)
}


function SignUp({ navigation }) {

    const [modalVisible, setModelVisible] = useState(false)

    useEffect(() => {
        firebase.auth().onAuthStateChanged((user) => {
            if (user != null) {
                console.log(user)
            }
        })
    }, [])

    const signInWithFacebook = async () => {
        try {
            await Facebook.initializeAsync({
                appId: '406659957343417',
            });
            const {
                type,
                token,
                expirationDate,
                permissions,
                declinedPermissions,
            } = await Facebook.logInWithReadPermissionsAsync({
                permissions: ['public_profile'],
            });

            if (type === 'success') {
                // Get the user's name using Facebook's Graph API
                const response = await fetch(`https://graph.facebook.com/me?access_token=${token}`);
                const credential = firebase.auth.FacebookAuthProvider.credential(token)

                const body = await response.json();
                handleModel()

                console.log('Logged in!', body);
                console.log('credential', credential);
            } else {
                // type === 'cancel'
            }
        } catch ({ message }) {
            alert(`Facebook Login Error: ${message}`);
        }
    }

    const signOut = () => {
        firebase.auth().signOut().then(function () {
            // Sign-out successful.
        }).catch(function (error) {
            // An error happened.
        });
        NativeModules.DevSettings.reload();
    }

    const handleModel = () => {
        setModelVisible(true)
        setTimeout(function () {
            setModelVisible(false)

            setTimeout(function () {
                navigation.navigate('ProfileDetail')
            }, 600);
        }, 2000);
    }

    const signInWithGoogleAsync = async () => {
        try {
            firebase.auth().onAuthStateChanged(async (user) => {
                // console.log("loadingScreen", user)
                if (user) {
                    console.log("aleady logged in")
                } else {
                    const result = await Google.logInAsync({
                        behaviour: 'web',
                        androidClientId: '153377214336-9abl62sr7dt0tnciejc59pn284665c8j.apps.googleusercontent.com',
                        iosClientId: '153377214336-f3jbmhlh3jq69f9rcmmmi7sa8t8of77l.apps.googleusercontent.com',
                        scopes: ['profile', 'email'],
                    });


                    if (result.type === 'success') {
                        console.log('logged in', result)
                        handleModel()

                        return result.accessToken;
                    } else {
                        return { cancelled: true };
                    }
                }
            })


        } catch (e) {
            console.log(e)
            return { error: true };
        }

    }
    return (
        <View style={styles.container}>
            <StatusBar style="auto" backgroundColor='white' />
            {/* <ScrollView style={styles.scrollContainer} > */}

            {/* animated model for successful loggin */}
            <AnimatedModal
                visible={modalVisible}
                onBackdropPress={() => {
                    setModelVisible(false)
                }}
                animationType="flipAndScale"
                duration={800}
            >
                <View style={{
                    width: '70%',
                    height: RFPercentage(9),
                    borderColor: colors.primary,
                    borderWidth: 3,
                    backgroundColor: '#fff',
                    borderRadius: RFPercentage(2),
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <Text style={{ color: colors.primary, fontFamily: 'serif', fontSize: RFPercentage(4) }} >
                        Login Successful
                    </Text>
                </View>
            </AnimatedModal>


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
                        onPress={() => signInWithFacebook()}
                    >
                        <Text style={{ letterSpacing: RFPercentage(0.3), color: 'white', padding: 10, fontSize: RFPercentage(2) }} >sign up with Facebook</Text>
                    </TouchableOpacity>
                </View>

                <View style={{ flexDirection: 'row', marginTop: RFPercentage(2), width: '100%', alignItems: 'center', justifyContent: 'center' }} >
                    <Image resizeMode="cover" style={{ maxHeight: 30, maxWidth: 30 }} source={require("../../assets/googleIcon.png")} />
                    <TouchableOpacity onPress={() => signInWithGoogleAsync()} style={{ alignItems: 'center', justifyContent: 'center' }} >
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