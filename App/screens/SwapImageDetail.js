import React, { useState } from 'react';
import { Dimensions, Image, ImageBackground, StyleSheet, View, Text, TouchableOpacity, Platform } from 'react-native';
import Carousel, { getInputRangeFromIndexes } from 'react-native-snap-carousel';
import { MaterialCommunityIcons } from "@expo/vector-icons"
import { RFPercentage } from 'react-native-responsive-fontsize';
// import * as Progress from 'expo-progress';

const screenWidth = Dimensions.get('window').width

function SwapImageDetail(props) {

    const [render, setRender] = useState(true)

    const handleLike = (item) => {
        // const data2 = data;

        const index = data.indexOf(item)

        data[index].liked = !data[index].liked

        setRender(!render)
        setData(data)
    }

    const handleNextImage = (item) => {

        let data2 = data;

        const index = data2.indexOf(item)

        const oldItem = data2.splice(index, 1)
        // data2 = [...data2, ...oldItem]

        setRender(!render)
        setData(data2)
    }

    const renderItem = ({ item, index }) => {
        return (
            <View style={{ marginLeft: '2.5%', marginTop: RFPercentage(5), width: "95%", justifyContent: "center", alignItems: 'center' }} >
                {/* <Progress.Bar /> */}
                <ImageBackground borderRadius={20} resizeMethod="resize" source={{ uri: item.image }} style={{ flexDirection: 'row', width: '100%', height: '97%', marginBottom: Platform.OS === 'ios' ? -RFPercentage(2.7) : RFPercentage(0) }} >
                    <View style={{ flexDirection: 'column', marginBottom: RFPercentage(6), marginLeft: RFPercentage(2), flex: 2, justifyContent: 'flex-end', alignItems: 'flex-start' }} >
                        <Text style={{ fontWeight: 'bold', color: 'white', fontSize: RFPercentage(3) }} >Lorem ipsum</Text>
                        <Text style={{ color: 'white', fontSize: RFPercentage(1.6) }} >Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.</Text>
                    </View>
                </ImageBackground>
                <View style={{ width: '70%', flexDirection: 'row', backgroundColor: 'white', flex: 1, justifyContent: 'center', alignItems: 'flex-end' }} >
                    <TouchableOpacity style={{ backgroundColor: 'white', flex: 1, alignItems: 'center' }} >
                        <MaterialCommunityIcons onPress={() => handleNextImage(item)} color="grey" size={40} name='close' />
                    </TouchableOpacity>
                    <View style={{ backgroundColor: 'white', flex: 1, alignItems: 'center' }} >
                        <MaterialCommunityIcons onPress={() => handleLike(item)} color="red" size={40} name={item.liked ? 'heart' : 'heart-outline'} />
                    </View>
                </View>

            </View >
        );
    }

    return (
        <View style={{ backgroundColor: 'white', flex: 1 }} >
            <Carousel
                ref={(c) => { _carousel = c; }}
                data={props.route.params.data}
                renderItem={renderItem}
                sliderWidth={screenWidth}
                itemWidth={screenWidth}
                layout={'default'}
                loop={true}
                autoplay={true}
                autoplayInterval={5000}
            />
        </View>
    );
}

export default SwapImageDetail;