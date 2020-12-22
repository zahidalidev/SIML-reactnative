import React, { useState } from 'react';
import { Button, Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View, ImageBackground, Platform } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { StatusBar } from 'expo-status-bar';
import { RFPercentage } from 'react-native-responsive-fontsize';
import Constants from 'expo-constants'
import {
    MaterialCommunityIcons, Octicons, Entypo
} from "@expo/vector-icons"
import { LinearGradient } from 'expo-linear-gradient';
import { Picker } from "@react-native-community/picker"

import colors from '../config/colors'
import AppPicker from '../components/AppPicker';
import ContactPicker from '../components/ContactPicker';
import TimePicker from '../components/TimePicker';

function Search(props) {

    const [selectedValue, setSelectedValue] = useState(null);
    const [selectedValue2, setSelectedValue2] = useState(null);

    const [feildBackColor4, setFeildBackColor4] = useState('white')
    const [borderWidth4, setBborderWidth4] = useState(1.4)
    const [topMargin, setMargin] = useState(-RFPercentage(4))


    const [recentearches, setRecentSearches] = useState([
        {
            name: 'this is recent search'
        },
        {
            name: 'this is recent search'
        },
        {
            name: 'this is recent search'
        },
        {
            name: 'this is recent search'
        },
    ])

    // console.log(selectedValue)
    return (
        <View style={styles.container}>
            <StatusBar style="auto" backgroundColor='#f6f6f6' />
            {/* <View style={[styles.subContainer, { paddingBottom: 100 }]} > */}
            <View style={{ maxHeight: RFPercentage(6), flexDirection: 'row', justifyContent: 'center', alignItems: 'center', borderBottomWidth: 0.5, borderBottomColor: colors.grey, padding: RFPercentage(2), width: "100%", flex: 1, backgroundColor: "#f6f6f6" }} >
                <TouchableOpacity style={{ flex: 1, alignItems: 'flex-start' }} >
                    <Text style={{ fontSize: RFPercentage(2), color: 'red' }} >Cancel</Text>
                </TouchableOpacity>
                <View style={{ flex: 2, alignItems: 'flex-start' }} >
                    <Text style={{ fontWeight: '600', fontSize: RFPercentage(2.8), color: 'black' }} >Select Locatons</Text>
                </View>
            </View>

            <View style={{ marginTop: RFPercentage(1), flexDirection: "row", width: '98%', alignItems: 'flex-start', justifyContent: 'center', flex: 1 }} >

                <View style={{ alignItems: 'center', justifyContent: "center", padding: RFPercentage(1.2) }}  >
                    <Octicons name="location" size={RFPercentage(2.7)} />
                </View>

                <View style={{ width: '100%', flex: 1, backgroundColor: feildBackColor4, borderRightWidth: borderWidth4, borderBottomWidth: borderWidth4, borderColor: colors.darkGrey, alignItems: 'flex-start', justifyContent: 'center' }} >
                    <TextInput
                        onFocus={() => {
                            setFeildBackColor4(colors.lightPrimary)
                            setBborderWidth4(0)
                            setMargin(Platform.OS === 'ios' ? -RFPercentage(22) : RFPercentage(0))
                        }}
                        onEndEditing={() => {
                            setFeildBackColor4('white')
                            setBborderWidth4(1.4)
                            setMargin(-RFPercentage(4))
                        }}
                        placeholder="location"
                        style={{ padding: 6, fontSize: RFPercentage(2.5) }}
                    />
                </ View>
            </View>
            {/* </View> */}
            <View style={{ width: "100%", flex: 10, marginTop: topMargin }} >


                <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollContainer} >
                    <View style={{ maxHeight: RFPercentage(6), flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'flex-start', padding: RFPercentage(2), width: "100%", flex: 1, backgroundColor: "white" }} >
                        <Entypo name="paper-plane" color="#4081ec" size={RFPercentage(2.4)} />
                        <TouchableOpacity style={{ marginLeft: RFPercentage(3), flex: 1, alignItems: 'flex-start' }} >
                            <Text style={{ fontWeight: '600', fontSize: RFPercentage(2.2), color: '#4081ec' }} >Current Locatons</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ marginTop: RFPercentage(1), backgroundColor: "#e5e5e5", flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'flex-start', padding: RFPercentage(1.4), width: "100%", flex: 1 }} >
                        <Text style={{ fontWeight: '600', fontSize: RFPercentage(2), color: '#6e6d72' }} >Recent Searches</Text>
                    </View>

                    {recentearches.map((search, i) => (
                        <View key={i} style={{ maxHeight: RFPercentage(6), flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'flex-start', padding: RFPercentage(2), width: "100%", flex: 1, backgroundColor: "white" }} >
                            <Octicons name="location" size={RFPercentage(2.4)} />
                            <TouchableOpacity style={{ marginLeft: RFPercentage(3), flex: 1, alignItems: 'flex-start' }} >
                                <Text style={{ fontWeight: '600', fontSize: RFPercentage(2.2), color: 'black' }} >{search.name}</Text>
                            </TouchableOpacity>
                        </View>

                    ))}
                </ScrollView>
            </View>
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
        width: "100%",
        backgroundColor: 'white',
        marginTop: RFPercentage(1),

    },
    subContainer: {
        // backgroundColor: 'red',
        width: '100%',
        // height: "20%",
        // marginBottom: RFPercentage(10),
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: 'white',
        justifyContent: 'flex-start',
    }
})

export default Search;