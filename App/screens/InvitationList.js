import React from 'react';
import { Button, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { RFPercentage } from 'react-native-responsive-fontsize';
import colors from '../config/colors'
import Constants from 'expo-constants'
import { TouchableHighlight } from 'react-native-gesture-handler';
import { useState } from 'react';
import CheckBox from '@react-native-community/checkbox';

function InvitationList(props) {

    const [data, setData] = useState([
        {
            picture: "https://fsb.zobj.net/crop.php?r=8VqZNpYGs7fYA4VBb0p5wj7Ydq0zB0kxCCauMieJ4__6N4j15g-rNv9481897flk0ka4zpapv4_I2T9C-_aHNRMv8AGSPy2MhuN9FrNswL2qerzW9R5XRZhgbZHUByFiCS1bAS-xepBalRARAdViBgzdh1JloinsF1-kiodaYu_2OA93ZqAOUsIgTJE",
            name: "Richard Foster",
            message: "This is message this is a message this is a message this is a messag",
            date: "02/12/2020",
            selected: false
        },
        {
            picture: "https://fsb.zobj.net/crop.php?r=8VqZNpYGs7fYA4VBb0p5wj7Ydq0zB0kxCCauMieJ4__6N4j15g-rNv9481897flk0ka4zpapv4_I2T9C-_aHNRMv8AGSPy2MhuN9FrNswL2qerzW9R5XRZhgbZHUByFiCS1bAS-xepBalRARAdViBgzdh1JloinsF1-kiodaYu_2OA93ZqAOUsIgTJE",
            name: "Richard Foster",
            message: "This is message this is a message this is a message this is a messag",
            date: "02/12/2020",
            selected: false
        },
        {
            picture: "https://fsb.zobj.net/crop.php?r=8VqZNpYGs7fYA4VBb0p5wj7Ydq0zB0kxCCauMieJ4__6N4j15g-rNv9481897flk0ka4zpapv4_I2T9C-_aHNRMv8AGSPy2MhuN9FrNswL2qerzW9R5XRZhgbZHUByFiCS1bAS-xepBalRARAdViBgzdh1JloinsF1-kiodaYu_2OA93ZqAOUsIgTJE",
            name: "Richard Foster",
            message: "This is message this is a message this is a message this is a messag",
            date: "02/12/2020",
            selected: false
        },
        {
            picture: "https://fsb.zobj.net/crop.php?r=8VqZNpYGs7fYA4VBb0p5wj7Ydq0zB0kxCCauMieJ4__6N4j15g-rNv9481897flk0ka4zpapv4_I2T9C-_aHNRMv8AGSPy2MhuN9FrNswL2qerzW9R5XRZhgbZHUByFiCS1bAS-xepBalRARAdViBgzdh1JloinsF1-kiodaYu_2OA93ZqAOUsIgTJE",
            name: "Richard Foster",
            message: "This is message this is a message this is a message this is a messag",
            date: "02/12/2020",
            selected: false
        },
        {
            picture: "https://fsb.zobj.net/crop.php?r=8VqZNpYGs7fYA4VBb0p5wj7Ydq0zB0kxCCauMieJ4__6N4j15g-rNv9481897flk0ka4zpapv4_I2T9C-_aHNRMv8AGSPy2MhuN9FrNswL2qerzW9R5XRZhgbZHUByFiCS1bAS-xepBalRARAdViBgzdh1JloinsF1-kiodaYu_2OA93ZqAOUsIgTJE",
            name: "Richard Foster",
            message: "This is message this is a message this is a message this is a messag",
            date: "02/12/2020",
            selected: false
        },
        {
            picture: "https://fsb.zobj.net/crop.php?r=8VqZNpYGs7fYA4VBb0p5wj7Ydq0zB0kxCCauMieJ4__6N4j15g-rNv9481897flk0ka4zpapv4_I2T9C-_aHNRMv8AGSPy2MhuN9FrNswL2qerzW9R5XRZhgbZHUByFiCS1bAS-xepBalRARAdViBgzdh1JloinsF1-kiodaYu_2OA93ZqAOUsIgTJE",
            name: "Richard Foster",
            message: "This is message this is a message this is a message this is a messag",
            date: "02/12/2020",
            selected: false
        },
        {
            picture: "https://fsb.zobj.net/crop.php?r=8VqZNpYGs7fYA4VBb0p5wj7Ydq0zB0kxCCauMieJ4__6N4j15g-rNv9481897flk0ka4zpapv4_I2T9C-_aHNRMv8AGSPy2MhuN9FrNswL2qerzW9R5XRZhgbZHUByFiCS1bAS-xepBalRARAdViBgzdh1JloinsF1-kiodaYu_2OA93ZqAOUsIgTJE",
            name: "Richard Foster",
            message: "This is message this is a message this is a message this is a messag",
            date: "02/12/2020",
            selected: false
        },
        {
            picture: "https://fsb.zobj.net/crop.php?r=8VqZNpYGs7fYA4VBb0p5wj7Ydq0zB0kxCCauMieJ4__6N4j15g-rNv9481897flk0ka4zpapv4_I2T9C-_aHNRMv8AGSPy2MhuN9FrNswL2qerzW9R5XRZhgbZHUByFiCS1bAS-xepBalRARAdViBgzdh1JloinsF1-kiodaYu_2OA93ZqAOUsIgTJE",
            name: "Richard Foster",
            message: "This is message this is a message this is a message this is a messag",
            date: "02/12/2020",
            selected: false
        },
        {
            picture: "https://fsb.zobj.net/crop.php?r=8VqZNpYGs7fYA4VBb0p5wj7Ydq0zB0kxCCauMieJ4__6N4j15g-rNv9481897flk0ka4zpapv4_I2T9C-_aHNRMv8AGSPy2MhuN9FrNswL2qerzW9R5XRZhgbZHUByFiCS1bAS-xepBalRARAdViBgzdh1JloinsF1-kiodaYu_2OA93ZqAOUsIgTJE",
            name: "Richard Foster",
            message: "This is message this is a message this is a message this is a messag",
            date: "02/12/2020",
            selected: false
        },
        {
            picture: "https://fsb.zobj.net/crop.php?r=8VqZNpYGs7fYA4VBb0p5wj7Ydq0zB0kxCCauMieJ4__6N4j15g-rNv9481897flk0ka4zpapv4_I2T9C-_aHNRMv8AGSPy2MhuN9FrNswL2qerzW9R5XRZhgbZHUByFiCS1bAS-xepBalRARAdViBgzdh1JloinsF1-kiodaYu_2OA93ZqAOUsIgTJE",
            name: "Richard Foster",
            message: "This is message this is a message this is a message this is a messag",
            date: "02/12/2020",
            selected: false
        },
        {
            picture: "https://fsb.zobj.net/crop.php?r=8VqZNpYGs7fYA4VBb0p5wj7Ydq0zB0kxCCauMieJ4__6N4j15g-rNv9481897flk0ka4zpapv4_I2T9C-_aHNRMv8AGSPy2MhuN9FrNswL2qerzW9R5XRZhgbZHUByFiCS1bAS-xepBalRARAdViBgzdh1JloinsF1-kiodaYu_2OA93ZqAOUsIgTJE",
            name: "Richard Foster",
            message: "This is message this is a message this is a message this is a messag",
            date: "02/12/2020",
            selected: false
        },
        {
            picture: "https://fsb.zobj.net/crop.php?r=8VqZNpYGs7fYA4VBb0p5wj7Ydq0zB0kxCCauMieJ4__6N4j15g-rNv9481897flk0ka4zpapv4_I2T9C-_aHNRMv8AGSPy2MhuN9FrNswL2qerzW9R5XRZhgbZHUByFiCS1bAS-xepBalRARAdViBgzdh1JloinsF1-kiodaYu_2OA93ZqAOUsIgTJE",
            name: "Richard Foster",
            message: "This is message this is a message this is a message this is a messag",
            date: "02/12/2020",
            selected: false
        },
        {
            picture: "https://fsb.zobj.net/crop.php?r=8VqZNpYGs7fYA4VBb0p5wj7Ydq0zB0kxCCauMieJ4__6N4j15g-rNv9481897flk0ka4zpapv4_I2T9C-_aHNRMv8AGSPy2MhuN9FrNswL2qerzW9R5XRZhgbZHUByFiCS1bAS-xepBalRARAdViBgzdh1JloinsF1-kiodaYu_2OA93ZqAOUsIgTJE",
            name: "Richard Foster",
            message: "This is message this is a message this is a message this is a messag",
            date: "02/12/2020",
            selected: false
        },
    ])

    const [checkBox, setCheckBox] = useState(false)
    const [render, setRender] = useState(false)

    const handleSelectedItem = (i) => {
        const data2 = data;
        data2[i].selected = !data2[i].selected
        setData(data2)
        setRender(!render)
    }


    return (
        <View style={styles.container}>
            <StatusBar style="auto" backgroundColor='#f6f6f6' />
            <View style={{ maxHeight: RFPercentage(8), flexDirection: 'row', justifyContent: 'center', alignItems: 'center', borderBottomWidth: 0.5, borderBottomColor: colors.grey, padding: RFPercentage(2), width: "100%", flex: 1, backgroundColor: "#f6f6f6" }} >
                <View style={{ flex: 1.5, alignItems: 'flex-end' }} >
                    <Text style={{ fontWeight: '600', fontSize: RFPercentage(2.8), color: 'black' }} >Invitations</Text>
                </View>
                <TouchableOpacity style={{ flex: 1, alignItems: 'flex-end' }} >
                    <Text style={{ fontSize: RFPercentage(2), fontWeight: 'bold' }} >Done</Text>
                </TouchableOpacity>
            </View>
            <ScrollView style={styles.scrollContainer} >
                <View style={styles.subContainer} >


                    {data.map((item, i) => (
                        <View key={i + 1} style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row', width: "100%", flex: 1, alignItems: 'center', justifyContent: 'center' }} >
                            {checkBox ? <CheckBox
                                disabled={false}
                                value={item.selected}
                                boxType="circle"
                                tintColor="red"
                                onValueChange={() => handleSelectedItem(i)}
                            /> : null}
                            <TouchableOpacity onLongPress={() => setCheckBox(true)} style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row', borderBottomWidth: 0.5, borderBottomColor: 'white', padding: RFPercentage(2), width: "100%", flex: 1, alignItems: 'center', justifyContent: 'center' }} >
                                <Image style={{ borderRadius: RFPercentage(4), width: RFPercentage(8), height: RFPercentage(8) }} source={{ uri: item.picture }} />
                                <View style={{ marginLeft: RFPercentage(1.5), justifyContent: 'flex-start', alignItems: 'flex-start', flexDirection: 'column' }} >
                                    <View style={{ marginTop: RFPercentage(0.5), flex: 1, flexDirection: "row" }} >
                                        <Text numberOfLines={1} style={{ flex: 1, maxWidth: "75%", fontWeight: '600', fontSize: RFPercentage(2.5), color: 'black' }} >{item.name}</Text>
                                        <Text numberOfLines={1} style={{ flex: 1, maxWidth: "25%", fontWeight: '600', fontSize: RFPercentage(2), color: 'grey' }} >{item.date}</Text>
                                    </View>
                                    <View style={{ marginBottom: RFPercentage(0.5) }} >
                                        <Text numberOfLines={2} style={{ maxWidth: "85%", fontWeight: '600', fontSize: RFPercentage(2), color: 'grey' }} >{item.message}</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        </View>
                    ))}

                </View>
            </ScrollView>
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
        marginTop: Constants.statusBarHeight,
        width: '100%'
    },
    scrollContainer: {
        flex: 1,
        width: '100%',
        backgroundColor: 'white',
    },
    subContainer: {
        width: '100%',
        flex: 10,
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: 'white',
        justifyContent: 'flex-end',
        marginBottom: RFPercentage(10)
    }
})

export default InvitationList;