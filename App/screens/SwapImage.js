import React, { useState } from 'react';
import { Dimensions, Image, ImageBackground, StyleSheet, View, Text, TouchableOpacity, Platform } from 'react-native';
import Carousel, { getInputRangeFromIndexes } from 'react-native-snap-carousel';
import { MaterialCommunityIcons } from "@expo/vector-icons"
import { RFPercentage } from 'react-native-responsive-fontsize';

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
            <View style={{ marginLeft: '2.5%', marginTop: RFPercentage(5), width: "95%", justifyContent: "center", alignItems: 'center' }} >

                <TouchableOpacity activeOpacity={0.9} onPress={() => navigation.navigate('SwapImageDetail', { data: moreDetaildata })} >
                    <ImageBackground borderRadius={20} resizeMethod="resize" source={{ uri: item.image }} style={{ flexDirection: 'row', width: '100%', height: '97%', marginBottom: Platform.OS === 'ios' ? -RFPercentage(2.7) : RFPercentage(0) }} >
                        <View style={{ flexDirection: 'column', marginBottom: RFPercentage(6), marginLeft: RFPercentage(2), flex: 2, justifyContent: 'flex-end', alignItems: 'flex-start' }} >
                            <Text style={{ fontWeight: 'bold', color: 'white', fontSize: RFPercentage(3) }} >Lorem ipsum</Text>
                            <Text style={{ color: 'white', fontSize: RFPercentage(1.6) }} >Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.</Text>
                        </View>
                    </ImageBackground>

                </TouchableOpacity>
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