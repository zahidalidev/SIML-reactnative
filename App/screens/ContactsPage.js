import React, { useEffect } from 'react';
import { Button, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View, TextInput, Platform } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { RFPercentage } from 'react-native-responsive-fontsize';
import Constants from 'expo-constants'
import { TouchableHighlight } from 'react-native-gesture-handler';
import { useState } from 'react';
import CheckBox from '@react-native-community/checkbox';
import { MaterialCommunityIcons } from "@expo/vector-icons"
import * as Contacts from 'expo-contacts';

import colors from '../config/colors'

function ContactsPage(props) {
    const [contacts, setContacts] = useState([])

    const handleContacts = async () => {
        const { status } = await Contacts.requestPermissionsAsync();
        if (status === 'granted') {
            const { data } = await Contacts.getContactsAsync({
                fields: [Contacts.Fields.Emails],
            });

            if (data.length > 0) {
                const contacts = data;
                contacts.map((contact, i) => {
                    contacts[i].selected = false;
                })
                setContacts(contacts);
            }
        }
    }

    useEffect(() => {
        handleContacts()
    }, [])

    const [checkBox, setCheckBox] = useState(false)
    const [render, setRender] = useState(false)

    const handleSelectedItem = (i) => {
        // const contacts2 = contacts;
        contacts[i].selected = !contacts[i].selected
        setContacts(contacts)
        setRender(!render)
        // console.log(contacts[i])
    }


    return (
        <View style={styles.container}>
            <StatusBar style="auto" backgroundColor='white' />
            <View style={{ maxHeight: RFPercentage(8), flexDirection: 'row', justifyContent: 'center', alignItems: 'center', padding: RFPercentage(2), width: "100%", flex: 1, backgroundColor: "white" }} >
                <TouchableOpacity style={{ flex: 1, alignItems: 'flex-start' }} >
                    <Text style={{ fontSize: RFPercentage(2), fontWeight: 'bold', color: "#4081ec" }} >Groups</Text>
                </TouchableOpacity>
                <View style={{ flex: 1, alignItems: 'center' }} >
                    <Text style={{ fontWeight: '600', fontSize: RFPercentage(2.8), color: 'black' }} >Contacts</Text>
                </View>
                <TouchableOpacity style={{ flex: 1, alignItems: 'flex-end' }} >
                    <MaterialCommunityIcons color="#4081ec" name="plus" size={RFPercentage(3)} />
                </TouchableOpacity>
            </View>

            <View style={{ marginBottom: RFPercentage(2), flexDirection: "row", width: '90%', alignItems: 'flex-start', justifyContent: 'flex-start' }} >
                <View style={{ flexDirection: "row", marginTop: RFPercentage(0.3), backgroundColor: "#EBE8E8", borderRadius: 6, width: '100%', alignItems: 'flex-start', justifyContent: 'flex-start' }} >
                    <MaterialCommunityIcons style={{ padding: 6, paddingLeft: 8, paddingRight: 0, paddingTop: 8 }} color="#a9a8ac" name="magnify" size={RFPercentage(3)} />
                    <TextInput
                        placeholder="Search"
                        style={{ padding: 6, paddingLeft: 0, fontSize: RFPercentage(2.5) }}
                    />
                </ View>
            </View>

            <ScrollView style={styles.scrollContainer} >
                <View style={styles.subContainer} >
                    {contacts.map((contact, i) => (
                        <View key={i + 1} style={{ flex: 1, backgroundColor: "white", borderBottomColor: 'grey', borderBottomWidth: 0.3, maxHeight: RFPercentage(6), width: "90%", justifyContent: 'center', alignItems: 'flex-start', flexDirection: 'row' }} >
                            {checkBox ?
                                <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }} >
                                    <CheckBox
                                        disabled={false}
                                        value={contact.selected}
                                        boxType="circle"
                                        tintColor="red"
                                        onValueChange={() => handleSelectedItem(i)}
                                        style={{ marginTop: RFPercentage(1.1) }}
                                    />
                                </View>
                                : null}
                            <TouchableOpacity onLongPress={() => setCheckBox(true)} style={{ padding: RFPercentage(2), paddingLeft: 0, flex: 1 }} >
                                <Text style={{ fontSize: RFPercentage(2.1), color: "black" }} >{contact.name}</Text>
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
        borderTopColor: "grey",
        borderTopWidth: 0.3,
        flex: 1,
        width: '100%',
        backgroundColor: 'white',
    },
    subContainer: {
        // width: '90%',
        flex: 10,
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: 'white',
        justifyContent: 'flex-start',
        marginBottom: RFPercentage(10)
    }
})

export default ContactsPage;