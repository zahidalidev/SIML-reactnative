import React, { useState } from "react";
import { TouchableOpacity, SafeAreaView, Text, Button, FlatList, Modal, Platform, StyleSheet, TextInput, TouchableWithoutFeedback, View, ScrollView } from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from 'expo-linear-gradient';

// import PickerItem from "./PickerItem";
import colors from "../config/colors";
import { RFPercentage } from 'react-native-responsive-fontsize';

function AppPicker({
    icon,
    items,
    numberOfColumns = 1,
    onSelectItem,
    placeholder,
    selectedItem,
    width = "100%"
}) {

    const [modalVisible, setModalVisible] = useState(false)
    return (
        <>
            <TouchableWithoutFeedback onPress={() => setModalVisible(true)} >
                <LinearGradient colors={['transparent', 'rgba(247, 242, 242, 0.2)']} style={[styles.container, width = { width }]} >
                    {icon && (
                        <MaterialCommunityIcons
                            name={icon}
                            size={20}
                            color={colors.darkGrey}
                            style={styles.icon}
                        />
                    )}
                    <Text style={[styles.text, { fontSize: RFPercentage(2.9), color: colors.darkGrey }]} >{selectedItem ? selectedItem.label : placeholder}</Text>
                    <MaterialCommunityIcons
                        name="chevron-down"
                        size={20}
                        color={colors.grey}
                    />
                </LinearGradient>
            </TouchableWithoutFeedback>

            <Modal visible={modalVisible} animationType="slide" >
                <SafeAreaView style={{ flex: 1 }} >
                    <View style={{ flex: 1, flexDirection: 'column', marginTop: RFPercentage(3), justifyContent: "center", alignItems: 'center' }} >

                        <MaterialCommunityIcons style={{ alignSelf: "flex-end", marginRight: RFPercentage(3) }} onPress={() => setModalVisible(false)} name="close" size={30} />
                        <ScrollView style={{ marginTop: RFPercentage(2), width: "90%" }} showsVerticalScrollIndicator={false} >
                            {items.map((item, index) => <TouchableOpacity style={{ marginTop: RFPercentage(1), backgroundColor: colors.lightPrimary, justifyContent: "center", alignItems: "center" }} key={index} onPress={() => {
                                setModalVisible(false);
                                onSelectItem(item)
                            }} >
                                <Text style={{ padding: 12, fontSize: RFPercentage(2.5), color: "#7f7979" }} >{item.label}</Text>
                            </TouchableOpacity>
                            )}
                        </ScrollView>
                    </View>
                </SafeAreaView>
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

export default AppPicker;