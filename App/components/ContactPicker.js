import React, { Component, useState } from "react";
import { TouchableOpacity, SafeAreaView, Text, Button, FlatList, Platform, StyleSheet, TextInput, TouchableWithoutFeedback, View, ScrollView } from "react-native";
import Modal from 'react-native-modalbox';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from 'expo-linear-gradient';

// import PickerItem from "./PickerItem";
import colors from "../config/colors";
import { RFPercentage } from 'react-native-responsive-fontsize';

class ContactPicker extends Component {

    state = {
        modalVisible: false
    }

    render() {

        const { icon,
            items,
            onSelectItem,
            placeholder,
            selectedItem,
            width } = this.props;

        return (
            <>
                <TouchableWithoutFeedback onPress={() => this.setState({ modalVisible: true })} >
                    <LinearGradient colors={['transparent', 'rgba(219, 217, 217, 0.8)']} style={[styles.container, { width }]} >
                        {icon && (
                            <MaterialCommunityIcons
                                name={icon}
                                size={20}
                                color={colors.darkGrey}
                                style={styles.icon}
                            />
                        )}
                        <Text style={[styles.text, { fontSize: RFPercentage(2.9), color: 'black' }]} >{selectedItem ? selectedItem.label : placeholder}</Text>
                        <MaterialCommunityIcons
                            name="plus"
                            size={20}
                            color='black'
                        />
                    </LinearGradient>
                </TouchableWithoutFeedback>

                <Modal style={{
                    height: RFPercentage(40),
                    justifyContent: 'center', alignItems: 'center'
                }} isOpen={this.state.modalVisible} onClosed={() => this.setState({ modalVisible: false })} >
                    {/* <SafeAreaView style={{ flex: 1 }}  > */}
                    {/* <ScrollView style={{ flexDirection: 'column', justifyContent: "center", alignItems: 'center' }} > */}

                    <MaterialCommunityIcons style={{ alignSelf: "flex-end", marginRight: RFPercentage(3) }} onPress={() => this.setState({ modalVisible: false })} name="close" size={30} />
                    <ScrollView style={{ width: "90%" }} showsVerticalScrollIndicator={false} >
                        {items.map((item, index) => <TouchableOpacity style={{ marginTop: RFPercentage(1), backgroundColor: colors.lightPrimary, justifyContent: "center", alignItems: "center" }} key={index} onPress={() => {
                            this.setState({ modalVisible: false });
                            onSelectItem(item)
                        }} >
                            <Text style={{ padding: 12, fontSize: RFPercentage(2.5), color: "#7f7979" }} >{item.label}</Text>
                        </TouchableOpacity>
                        )}
                    </ScrollView>
                    {/* </ScrollView> */}
                    {/* </SafeAreaView> */}
                </Modal>
            </>
        )
    }
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