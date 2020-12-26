import React, { useState } from 'react';
import { Dimensions, Image, ImageBackground, StyleSheet, View, Text, TouchableOpacity, Platform } from 'react-native';
import Carousel, { getInputRangeFromIndexes } from 'react-native-snap-carousel';
import { MaterialCommunityIcons } from "@expo/vector-icons"
import { RFPercentage } from 'react-native-responsive-fontsize';
import colors from '../config/colors';

const screenWidth = Dimensions.get('window').width

function SwapImage({ navigation }) {

    const [render, setRender] = useState(true)
    const [right, setRight] = useState(false)
    const [data, setData] = useState([
        {
            id: 1,
            image: 'https://image.resy.com/3/003/2/35879/574c6ab21b6910d6cbd2da085a125944ca3df77c/jpg/640x360',
            liked: true
        },
        {
            id: 2,
            image: 'https://image.resy.com/3/003/2/7535/025761144dcc2590de6d3d1222a3d30985a9e65d/jpg/640x360',
            liked: false
        },
        {
            id: 3,
            image: 'https://image.resy.com/3/003/2/5146/b01cefbb81ab6de976679c06fe6fc9bfee0698e3/jpg/640x360',
            liked: false
        },
        {
            id: 4,
            image: 'https://image.resy.com/3/003/2/10527/b7dd46bb6d9ed0e068b64399b2c05df3a69b45e6/jpg/640x360',
            liked: false
        },
    ])

    const [moreDetaildata, setmoreDetailData] = useState([
        {
            id: 1,
            image: 'https://images.pexels.com/photos/1535162/pexels-photo-1535162.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            liked: true
        },
        {
            id: 2,
            image: 'https://images.pexels.com/photos/1212487/pexels-photo-1212487.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            liked: false
        },
        {
            id: 3,
            image: 'https://www.teahub.io/photos/full/8-87389_witcher-dark-background-minimal-4k-ultra-hd-mobile.jpg',
            liked: false
        }
    ])


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

    const scrollInterpolator = (index, carouselProps) => {
        const range = [1, 0, -1];
        const inputRange = getInputRangeFromIndexes(range, index, carouselProps);
        const outputRange = range;

        return { inputRange, outputRange };
    }

    const animatedStyles = (index, animatedValue, carouselProps) => {
        // const sizeRef = carouselProps.vertical ? carouselProps.itemHeight : carouselProps.itemWidth;
        // const translateProp = carouselProps.vertical ? 'translateY' : 'translateX';

        return {
            zIndex: carouselProps.data.length - index,
            opacity: animatedValue.interpolate({
                inputRange: [2, 3],
                outputRange: [1, 0]
            }),
            transform: [{
                perspective: 1000
            },
            {
                scale: animatedValue.interpolate({
                    inputRange: [-1, 0, 1],
                    outputRange: [0.8, 1, 0.8],
                    extrapolate: 'clamp'
                })
            },
            {
                rotate: animatedValue.interpolate({
                    inputRange: [-1, 0, 1],
                    outputRange: ['-10deg', '0deg', '10deg'],
                    extrapolate: 'clamp'
                })
            }
            ]
        };
    }

    const renderItem = ({ item, index }) => {
        return (
            <View style={{ marginLeft: '2.5%', marginTop: RFPercentage(3), width: "95%", justifyContent: "center", alignItems: 'center' }} >

                <View style={{ marginBottom: -RFPercentage(2), width: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start' }}>
                    <TouchableOpacity onPress={() => console.log('back')} style={{ alignItems: 'flex-start', justifyContent: 'flex-start' }} >
                        <MaterialCommunityIcons size={RFPercentage(6)} color={colors.darkGrey} name="chevron-left" />
                    </TouchableOpacity>
                </View>

                <View style={{ marginBottom: RFPercentage(1), flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'center' }}>
                    <Text style={{ fontSize: RFPercentage(2.2), color: colors.primary }} >SIML</Text>
                </View>

                <TouchableOpacity style={{ maxHeight: '92.5%' }} activeOpacity={0.9} onPress={() => navigation.navigate('SwapImageDetail', { data: moreDetaildata })} >
                    <ImageBackground borderRadius={20} resizeMethod="resize" source={{ uri: item.image }} style={{ marginLeft: "1.5%", flexDirection: 'row', width: '97%', height: '96%', marginBottom: Platform.OS === 'ios' ? -RFPercentage(2.7) : RFPercentage(0) }} >
                        <View style={{ flexDirection: 'column', marginBottom: RFPercentage(5), flex: 1, justifyContent: 'flex-end', alignItems: 'center' }} >
                            <Text style={{ color: 'white', fontSize: RFPercentage(2) }} >Lorem ipsum, or lipsum as it.</Text>
                        </View>
                    </ImageBackground>

                </TouchableOpacity>

                <View style={{ width: '70%', flexDirection: 'row', backgroundColor: 'white', flex: 1, justifyContent: 'center', alignItems: 'flex-end' }} >
                    <TouchableOpacity style={{ marginRight: RFPercentage(8), backgroundColor: "#EBE8E8", width: RFPercentage(8), height: RFPercentage(8), maxWidth: RFPercentage(8), flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }} >
                        <Image resizeMode="contain" style={{ maxWidth: RFPercentage(3.5), maxHeight: RFPercentage(3.5) }} source={require("../../assets/X.png")} />
                    </TouchableOpacity>

                    <TouchableOpacity style={{ backgroundColor: "#EBE8E8", width: RFPercentage(8), height: RFPercentage(8), maxWidth: RFPercentage(8), flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }} >
                        <Image resizeMode="contain" style={{ maxWidth: RFPercentage(3.5), maxHeight: RFPercentage(3.5) }} source={require("../../assets/tick.png")} />
                    </TouchableOpacity>
                </View>

            </View >
        );
    }

    return (
        <View style={{ backgroundColor: 'white', flex: 1 }} >
            <Carousel
                ref={(c) => { _carousel = c; }}
                data={data}
                renderItem={renderItem}
                sliderWidth={screenWidth}
                itemWidth={screenWidth}
                // layout={'stack'}
                // layout={'default'}
                layout={'tinder'}
                loop={true}
                layoutCardOffset={RFPercentage(2)}
                // directionalLockEnabled={true}
                // disableIntervalMomentum={true}
                useScrollView={true}
                activeAnimationType="timing"
                scrollInterpolator={scrollInterpolator}
                slideInterpolatedStyle={animatedStyles}
                useScrollView={true}
            // onTouchStart={() => setRight(true)}

            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
})

export default SwapImage;