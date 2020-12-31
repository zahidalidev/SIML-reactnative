import React, { useState } from 'react';
import { Button, Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View, ImageBackground, Platform, FlatList } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { StatusBar } from 'expo-status-bar';
import { RFPercentage } from 'react-native-responsive-fontsize';
import Constants from 'expo-constants'
import { MaterialCommunityIcons } from "@expo/vector-icons"
import { LinearGradient } from 'expo-linear-gradient';
import { Picker } from "@react-native-community/picker"
import Modal from 'react-native-modalbox';
import DateTimePicker from '@react-native-community/datetimepicker';

import colors from '../config/colors'
import AppPicker from '../components/AppPicker';
import MainPicker from '../components/MainPicker';
import { color } from 'react-native-reanimated';

function Seat(props) {
    const [modalVisible, setModalVisible] = useState(true)
    const [date, setDate] = useState(new Date(1598051730000));
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);

    const [sizes, setSizes] = useState([
        { name: 1 },
        { name: 2 },
        { name: 3 },
        { name: 4 },
        { name: 5 },
        { name: 6 },
        { name: 8 },
        { name: 9 },
        { name: 10 },
        { name: 11 },
        { name: 12 },
        { name: 13 },
    ])

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
    };

    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    };

    const showDatepicker = () => {
        showMode('date');
    };

    const showTimepicker = () => {
        showMode('time');
    };
    return (
        <View style={styles.container}>
            <Modal
                position="bottom"
                swipeToClose={false}
                style={{
                    height: Platform.OS === 'ios' ? "70%" : "50%",
                    backgroundColor: 'white',
                    justifyContent: 'center', alignItems: 'center'
                }} isOpen={modalVisible} onClosed={() => setModalVisible(false)} >

                <View style={{ marginBottom: RFPercentage(5), flexDirection: 'row', width: "90%", alignItems: "flex-end" }} showsVerticalScrollIndicator={true} >
                    <View style={{ flexDirection: "column", alignItems: "flex-start", justifyContent: "flex-end" }} >
                        <Text style={{ marginBottom: RFPercentage(2), fontSize: RFPercentage(2.4), fontWeight: "bold" }} >Party size</Text>
                        <FlatList
                            horizontal={true}
                            data={sizes}
                            renderItem={() =>
                                <View style={{ marginRight: RFPercentage(1), borderWidth: 1, borderRadius: RFPercentage(2.5), justifyContent: "center", alignItems: "center", width: RFPercentage(5), height: RFPercentage(5) }} >
                                    <Text style={{ fontSize: RFPercentage(2.4), fontWeight: "bold" }} >1</Text>
                                </View>
                            }

                        />
                    </View>
                </View>
                <View style={{ flexDirection: 'row', paddingBottom: RFPercentage(4), width: "90%" }} showsVerticalScrollIndicator={true} >
                    <View style={{ flexDirection: "column", alignItems: "flex-start", justifyContent: "flex-start" }} >
                        <Text style={{ fontSize: RFPercentage(2.4), fontWeight: "bold" }} >Date and Time</Text>
                        <TouchableOpacity onPress={showDatepicker}                        >
                            <Text>Show date picker!</Text>
                        </TouchableOpacity
                        >
                        <TouchableOpacity onPress={showTimepicker}
                        >
                            <Text>Show time picker!</Text>
                        </TouchableOpacity
                        >
                        {show && (
                            <DateTimePicker
                                style={{ width: 320, backgroundColor: "white" }}
                                testID="dateTimePicker"
                                value={date}
                                mode={mode}
                                is24Hour={true}
                                display="default"
                                onChange={onChange}
                            />
                        )}
                    </View>

                </View>
            </Modal>
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
        backgroundColor: 'white',
        width: '100%',
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        // backgroundColor: 'pink',
        justifyContent: 'center',
        // marginBottom: RFPercentage(10)
    }
})

export default Seat;