import React, { useEffect, useState } from 'react';
import { Button, Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View, Switch, Platform, FlatList } from 'react-native';
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
import Modal from 'react-native-modalbox';
import DateTimePicker from '@react-native-community/datetimepicker';
import { ImageBackground } from 'react-native';

function InviteFriends(props) {

    const [groupImage, setGroupImage] = useState("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxxaLKZOlv4hNd4MW8kY-WbKixRDSwQ3b_rw&usqp=CAU")
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    const [friends, setFriends] = useState([
        {
            id: 1,
            picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxxaLKZOlv4hNd4MW8kY-WbKixRDSwQ3b_rw&usqp=CAU",
            selected: true
        },
        {
            id: 2,
            picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxxaLKZOlv4hNd4MW8kY-WbKixRDSwQ3b_rw&usqp=CAU",
            selected: false
        },
        {
            id: 3,
            picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxxaLKZOlv4hNd4MW8kY-WbKixRDSwQ3b_rw&usqp=CAU",
            selected: false
        },
        {
            id: 4,
            picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxxaLKZOlv4hNd4MW8kY-WbKixRDSwQ3b_rw&usqp=CAU",
            selected: false
        },
        {
            id: 5,
            picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxxaLKZOlv4hNd4MW8kY-WbKixRDSwQ3b_rw&usqp=CAU",
            selected: false
        },
        {
            id: 6,
            picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxxaLKZOlv4hNd4MW8kY-WbKixRDSwQ3b_rw&usqp=CAU",
            selected: false
        },
        {
            id: 7,
            picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxxaLKZOlv4hNd4MW8kY-WbKixRDSwQ3b_rw&usqp=CAU",
            selected: false
        },
        {
            id: 8,
            picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxxaLKZOlv4hNd4MW8kY-WbKixRDSwQ3b_rw&usqp=CAU",
            selected: false
        },
        {
            id: 9,
            picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxxaLKZOlv4hNd4MW8kY-WbKixRDSwQ3b_rw&usqp=CAU",
            selected: false
        },
        {
            id: 10,
            picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxxaLKZOlv4hNd4MW8kY-WbKixRDSwQ3b_rw&usqp=CAU",
            selected: false
        },
        {
            id: 11,
            picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxxaLKZOlv4hNd4MW8kY-WbKixRDSwQ3b_rw&usqp=CAU",
            selected: false
        },
    ])

    const [friends_1, setfriends_1] = useState([])
    const [friends_2, setfriends_2] = useState([])
    const [render, setRender] = useState(false)


    useEffect(() => {
        const indexToSplit = friends.length / 2;
        const first = friends.slice(0, indexToSplit);
        const second = friends.slice(indexToSplit);
        setfriends_1(first)
        setfriends_2(second)
    }, [])

    const handleFriends = (item) => {
        let index = friends_1.indexOf(item);
        if (index === -1) {
            index = friends_2.indexOf(item);
            friends_2[index].selected = !friends_2[index].selected;
            setfriends_2(friends_2)
            setRender(!render)
        } else {
            friends_1[index].selected = !friends_1[index].selected;
            setfriends_1(friends_1)
            setRender(!render)
        }
    }

    // console.log(selectedValue)
    return (
        <View style={styles.container}>
            <StatusBar style="auto" backgroundColor='white' />
            <View style={{ width: '100%', marginTop: RFPercentage(1), flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start' }}>
                <TouchableOpacity onPress={() => console.log('setting')} style={{ alignItems: 'flex-start', justifyContent: 'flex-start' }} >
                    <MaterialCommunityIcons size={RFPercentage(6)} color={colors.darkGrey} name="chevron-left" />
                </TouchableOpacity>

                <View style={{ elevation: 1, width: '100%', alignItems: 'flex-end', justifyContent: 'flex-end', width: '80%' }} >
                    <TouchableOpacity
                        style={{
                            // backgroundColor: colors.,
                            backgroundColor: '#EBE8E8',
                            shadowColor: '#000',
                            shadowOffset: { width: 1, height: 1 },
                            shadowOpacity: 0.4,
                            shadowRadius: 1,
                            elevation: 3,
                            width: '17%', alignItems: 'center', justifyContent: 'center', height: RFPercentage(3)
                        }}
                        onPress={() => console.log('send')}
                    >
                        <Text style={{ color: colors.primary, padding: RFPercentage(1), fontSize: RFPercentage(2) }} >cancel</Text>
                    </TouchableOpacity>
                </View>
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
                            <Text style={{ color: colors.primary, fontSize: RFPercentage(2.2) }} >Group name here</Text>
                        </View>
                    </View>


                    <View style={{ marginBottom: RFPercentage(7), flexDirection: "column", width: '95%', alignItems: 'flex-start', justifyContent: 'flex-end', flex: 1 }} >
                        <Text style={{ color: colors.primary, padding: RFPercentage(2.8), paddingLeft: 0, fontSize: RFPercentage(2) }} >Search friends on SIML</Text>
                        <View style={{ flexDirection: "column", marginTop: RFPercentage(0.3), backgroundColor: "white", borderRadius: 6, width: '100%', alignItems: 'flex-start', justifyContent: 'center' }} >
                            <ScrollView horizontal={true}  >
                                {friends_1.map((friend, i) => (
                                    <TouchableOpacity onPress={() => handleFriends(friend)} style={[{ borderRadius: RFPercentage(6), marginRight: RFPercentage(1.5) }, friend.selected === true ? { backgroundColor: colors.primary } : null]} >
                                        <ImageBackground borderRadius={RFPercentage(5)} style={[friend.selected === true ? { width: RFPercentage(9), height: RFPercentage(9), borderRadius: RFPercentage(4.5), margin: 4 } : { width: RFPercentage(10), height: RFPercentage(10), borderRadius: RFPercentage(5) }, { alignItems: "flex-end", justifyContent: "flex-end" }]} source={{ uri: friend.picture }} >
                                            {friend.selected === true ?
                                                <View style={{ flex: 1, justifyContent: "flex-end", alignItems: "flex-end" }} >
                                                    <MaterialCommunityIcons color={colors.primary} name="check-circle" size={RFPercentage(4)} />
                                                </View> : null
                                            }
                                        </ImageBackground>
                                    </TouchableOpacity>
                                ))}
                            </ScrollView>
                            <ScrollView horizontal={true} style={{ marginTop: RFPercentage(1) }} >
                                {friends_2.map((friend, i) => (
                                    <TouchableOpacity onPress={() => handleFriends(friend)} style={[{ borderRadius: RFPercentage(6), marginRight: RFPercentage(1.5) }, friend.selected === true ? { backgroundColor: colors.primary } : null]} >
                                        <ImageBackground borderRadius={RFPercentage(5)} style={[friend.selected === true ? { width: RFPercentage(9), height: RFPercentage(9), borderRadius: RFPercentage(4.5), margin: 4 } : { width: RFPercentage(10), height: RFPercentage(10), borderRadius: RFPercentage(5) }, { alignItems: "flex-end", justifyContent: "flex-end" }]} source={{ uri: friend.picture }} >
                                            {friend.selected === true ?
                                                <View style={{ flex: 1, justifyContent: "flex-end", alignItems: "flex-end" }} >
                                                    <MaterialCommunityIcons color={colors.primary} name="check-circle" size={RFPercentage(4)} />
                                                </View> : null
                                            }
                                        </ImageBackground>
                                    </TouchableOpacity>
                                ))}
                            </ScrollView>
                        </ View>
                    </View>

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
                                width: '60%', alignItems: 'center', justifyContent: 'center', height: RFPercentage(5.2)
                            }}
                            onPress={() => console.log('send')}
                        >
                            <Text style={{ letterSpacing: RFPercentage(0.3), color: colors.primary, padding: 10, fontSize: RFPercentage(2.2) }} >invite friends</Text>
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

export default InviteFriends;