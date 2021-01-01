import React, { useEffect, useState } from 'react';
import { Button, Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View, Switch, Platform, FlatList } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { RFPercentage } from 'react-native-responsive-fontsize';
import Constants from 'expo-constants'
import { MaterialCommunityIcons } from "@expo/vector-icons"
import { ImageBackground } from 'react-native';

import colors from '../config/colors'

function groups(props) {

    const [groups, setgroups] = useState([
        {
            id: 1
        },
        {
            id: 2
        },
        {
            id: 3
        },
        {
            id: 4
        },
        {
            id: 5
        },
        {
            id: 6
        },
        {
            id: 7
        },
        {
            id: 8
        },
        {
            id: 9
        },
        {
            id: 10
        },
        {
            id: 11
        },
    ])

    return (
        <View style={styles.container}>
            <StatusBar style="auto" backgroundColor='white' />
            <View style={{ width: '100%', marginTop: RFPercentage(1), flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start' }}>
                <TouchableOpacity onPress={() => console.log('setting')} style={{ alignItems: 'flex-start', justifyContent: 'flex-start' }} >
                    <MaterialCommunityIcons size={RFPercentage(6)} color={colors.darkGrey} name="chevron-left" />
                </TouchableOpacity>
            </View>

            <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollContainer} >
                <View style={[styles.subContainer]} >

                    <View style={{ flexDirection: "row", width: '100%', alignItems: 'center', justifyContent: 'center', flex: 1 }} >
                        <Text style={{ color: colors.primary, fontSize: RFPercentage(3) }} >SIML</Text>
                    </View>


                    <View style={{ marginTop: RFPercentage(7), flexDirection: "column", width: '95%', alignItems: 'flex-start', justifyContent: 'flex-end', flex: 1 }} >
                        <View style={{ flexDirection: "row", marginTop: RFPercentage(0.3), backgroundColor: "white", borderRadius: 6, width: '100%', alignItems: 'flex-start', justifyContent: 'center' }} >
                            <ScrollView horizontal={true}  >
                                {groups.map((group, i) => (
                                    <View key={i} style={{ flexDirection: 'column' }} >
                                        <TouchableOpacity style={{ width: RFPercentage(18), height: RFPercentage(18), backgroundColor: colors.lightGrey, marginRight: RFPercentage(3) }} >
                                        </TouchableOpacity>
                                        <TouchableOpacity style={{ marginTop: RFPercentage(3), width: RFPercentage(18), height: RFPercentage(18), backgroundColor: colors.lightGrey, marginRight: RFPercentage(3) }} >
                                        </TouchableOpacity>
                                    </View>
                                ))}
                            </ScrollView>
                        </ View>
                    </View>

                    <View style={{ marginBottom: RFPercentage(5), elevation: 1, marginTop: RFPercentage(4), width: '95%', alignItems: 'center', justifyContent: 'center', flex: 2 }} >
                        <TouchableOpacity
                            style={{
                                // backgroundColor: colors.,
                                backgroundColor: '#EBE8E8',
                                shadowColor: '#000',
                                shadowOffset: { width: 1, height: 1 },
                                shadowOpacity: 0.4,
                                shadowRadius: 1,
                                elevation: 3,
                                width: '100%', alignItems: 'center', justifyContent: 'center', height: RFPercentage(8)
                            }}
                            onPress={() => console.log('send')}
                        >
                            <Text style={{ letterSpacing: RFPercentage(0.3), color: colors.primary, padding: 10, fontSize: RFPercentage(2.2) }} >create group</Text>
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

export default groups;