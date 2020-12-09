import React from 'react';
import { Platform, StyleSheet, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Picker } from "@react-native-community/picker"
import { RFPercentage } from "react-native-responsive-fontsize"
import colors from "../config/colors"
import AppPicker from './AppPicker';

function MainPicker({ selectedValue, setSelectedValue, items }) {

    if (Platform.OS === 'ios') {
        return (
            <AppPicker
                items={items}
                numberOfColumns={1}
                onSelectItem={(item) => setSelectedValue(item)}
                placeholder='option'
                selectedItem={selectedValue}
            />
        )
    } else {
        return (
            <LinearGradient colors={['transparent', '#e8e8e8']} style={{
                flex: 1,
                marginTop: RFPercentage(1.5),
                width: "100%",
                alignItems: "center",
            }}>
                <Picker
                    selectedValue={selectedValue}
                    mode="dropdown"
                    style={{
                        transform: [
                            { scaleX: 1.4 },
                            { scaleY: 1.4 },
                        ], height: RFPercentage(6), width: "70%", color: colors.darkGrey
                    }}
                    onValueChange={(itemValue) => setSelectedValue(itemValue)}
                >
                    {items.map(item => <Picker.Item label={item.label} value={item.label} />)}
                </Picker>

            </LinearGradient>
        );
    }
}

const styles = StyleSheet.create({
    container: {

    }
})

export default MainPicker;