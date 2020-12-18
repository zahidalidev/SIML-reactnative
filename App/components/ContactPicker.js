import React, { Component, useState } from "react";
import { TouchableOpacity, SafeAreaView, Text, Button, FlatList, Platform, StyleSheet, TextInput, TouchableWithoutFeedback, View, ScrollView } from "react-native";
import Modal from 'react-native-modalbox';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from 'expo-linear-gradient';
import * as Contacts from 'expo-contacts';

// import PickerItem from "./PickerItem";
import colors from "../config/colors";
import { RFPercentage } from 'react-native-responsive-fontsize';

function ContactPicker({ icon,
    setSelectedValue,
    placeholder,
    selectedItem,
    width }) {

    const [modalVisible, setModalVisible] = useState(false)
    const [contacts, setContacts] = useState([])

    const handleContacts = async () => {
        const { status } = await Contacts.requestPermissionsAsync();
        if (status === 'granted') {
            const { data } = await Contacts.getContactsAsync({
                fields: [Contacts.Fields.Emails],
            });

            if (data.length > 0) {
                const contact = data;
                setContacts(contact);

                setModalVisible(true)
            }
        }
    }


    return (
        <>
            <TouchableWithoutFeedback onPress={() => handleContacts()} >
                <LinearGradient colors={['transparent', 'rgba(219, 217, 217, 0.8)']} style={[styles.container, { width, marginLeft: "10%" }]} >
                    <Text numberOfLines={1} style={[styles.text, { fontSize: RFPercentage(2.9), color: 'black' }]} >{selectedItem ? selectedItem.name : placeholder}</Text>

                    <View style={{ borderWidth: 1, borderRadius: 50, marginLeft: 10 }} >
                        <MaterialCommunityIcons
                            name={icon}
                            size={RFPercentage(2.5)}
                            color='black'
                        />
                    </View>

                </LinearGradient>
            </TouchableWithoutFeedback>

            <Modal
                swipeToClose={false}
                style={{
                    backgroundColor: 'white',
                    justifyContent: 'center', alignItems: 'center'
                }} isOpen={modalVisible} onClosed={() => setModalVisible(false)} >
                {/* <SafeAreaView style={{ flex: 1 }}  > */}
                {/* <ScrollView style={{ flexDirection: 'column', justifyContent: "center", alignItems: 'center' }} > */}

                <MaterialCommunityIcons style={{ alignSelf: "flex-end", marginRight: RFPercentage(3) }} onPress={() => setModalVisible(false)} name="close" size={30} />
                <ScrollView style={{ paddingBottom: RFPercentage(4), width: "90%" }} showsVerticalScrollIndicator={true} >
                    {contacts.map((contact, index) => <TouchableOpacity style={{ marginTop: RFPercentage(1), backgroundColor: colors.lightPrimary, justifyContent: "center", alignItems: "center" }} key={index} onPress={() => {
                        setModalVisible(false);
                        setSelectedValue(contact)
                    }} >
                        <Text style={{ padding: 12, fontSize: RFPercentage(2.5), color: "#7f7979" }} >{contact.name}</Text>
                    </TouchableOpacity>
                    )}
                </ScrollView>
                {/* </ScrollView> */}
                {/* </SafeAreaView> */}
            </Modal>
        </>
    )

}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        // borderRadius: 25,
        flexDirection: "row",
        padding: 15,
        marginVertical: 10,
        alignItems: "center"
    },
    icon: {
        marginRight: 10
    },
    text: {
        flex: 1
    },
})

export default ContactPicker;