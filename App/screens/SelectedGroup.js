import React, { useEffect, useState } from 'react';
import { Button, Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View, Switch, Platform, FlatList } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { RFPercentage } from 'react-native-responsive-fontsize';
import Constants from 'expo-constants'
import { MaterialCommunityIcons } from "@expo/vector-icons"
import { ImageBackground } from 'react-native';

import colors from '../config/colors'

function SelectedGroup(props) {

    const [groupImage, setGroupImage] = useState("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxxaLKZOlv4hNd4MW8kY-WbKixRDSwQ3b_rw&usqp=CAU")

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

    const [render, setRender] = useState(false)


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

                    <View style={{ flexDirection: "row", width: '81%', alignItems: 'center', justifyContent: 'flex-start', flex: 1 }} >
                        {/* group picture */}
                        <Image style={{ marginTop: RFPercentage(3), borderRadius: RFPercentage(10), width: RFPercentage(20), height: RFPercentage(20) }} borderRadius={RFPercentage(10)} source={{ uri: groupImage }} />
                        <View style={{ flexDirection: 'column', flex: 1, alignItems: 'flex-end', marginRight: RFPercentage(1.5) }} >
                            <Text style={{ color: colors.primary, fontSize: RFPercentage(2.2) }} >user name</Text>
                            <Text style={{ color: colors.primary, fontSize: RFPercentage(2.2) }} >user name</Text>
                            <Text style={{ color: colors.primary, fontSize: RFPercentage(2.2) }} >user name</Text>
                            <Text style={{ color: colors.primary, fontSize: RFPercentage(2.2) }} >user name</Text>
                            <Text style={{ color: colors.primary, fontSize: RFPercentage(2.2) }} >user name</Text>
                        </View>
                    </View>

                    <View style={{ marginTop: RFPercentage(3), flexDirection: "column", width: '95%', alignItems: 'flex-start', justifyContent: 'flex-end', flex: 1 }} >
                        <Text style={{ color: colors.primary, padding: RFPercentage(2.8), paddingLeft: 0, fontSize: RFPercentage(2.5) }} >group history - restaurants</Text>
                        <View style={{ flexDirection: "row", marginTop: RFPercentage(0.3), backgroundColor: "white", borderRadius: 6, width: '100%', alignItems: 'flex-start', justifyContent: 'center' }} >
                            <ScrollView horizontal={true}  >
                                {groups.map((group, i) => (
                                    <ImageBackground source={{ uri: groupImage }} style={{ width: RFPercentage(18), height: RFPercentage(18), backgroundColor: colors.lightGrey, marginRight: RFPercentage(3) }} >
                                    </ImageBackground>
                                ))}
                            </ScrollView>
                        </ View>
                    </View>
                    <View style={{ marginTop: RFPercentage(1), flexDirection: "column", width: '95%', alignItems: 'flex-start', justifyContent: 'flex-end', flex: 1 }} >
                        <Text style={{ color: colors.primary, padding: RFPercentage(2.8), paddingLeft: 0, fontSize: RFPercentage(2.5) }} >group history - events</Text>
                        <View style={{ flexDirection: "row", marginTop: RFPercentage(0.3), backgroundColor: "white", borderRadius: 6, width: '100%', alignItems: 'flex-start', justifyContent: 'center' }} >
                            <ScrollView horizontal={true}  >
                                {groups.map((group, i) => (
                                    <ImageBackground source={{ uri: groupImage }} style={{ width: RFPercentage(18), height: RFPercentage(18), backgroundColor: colors.lightGrey, marginRight: RFPercentage(3) }} >
                                    </ImageBackground>
                                ))}
                            </ScrollView>
                        </ View>
                    </View>

                    <View style={{ marginTop: RFPercentage(4), marginBottom: RFPercentage(5), flexDirection: "row", width: '95%', alignItems: 'flex-start', justifyContent: 'flex-end', flex: 1 }} >
                        <TouchableOpacity style={{ width: RFPercentage(10), height: RFPercentage(10), backgroundColor: colors.lightGrey, marginRight: RFPercentage(3) }} >
                        </TouchableOpacity>
                        <TouchableOpacity style={{ width: RFPercentage(10), height: RFPercentage(10), backgroundColor: colors.lightGrey, marginRight: RFPercentage(3) }} >
                        </TouchableOpacity>
                        <TouchableOpacity style={{ width: RFPercentage(10), height: RFPercentage(10), backgroundColor: colors.lightGrey, marginRight: RFPercentage(3) }} >
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

export default SelectedGroup;