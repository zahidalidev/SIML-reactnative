import React, { useEffect, useState, useRef } from 'react';
import { Dimensions, Image, ImageBackground, StyleSheet, View, Text, TouchableOpacity, Platform, Animated } from 'react-native';
import Carousel, { getInputRangeFromIndexes } from 'react-native-snap-carousel';
import { MaterialCommunityIcons } from "@expo/vector-icons"
import { RFPercentage } from 'react-native-responsive-fontsize';
import Constants from 'expo-constants';
import colors from '../config/colors';
const screenWidth = Dimensions.get('window').width

function useInterval(callback, delay) {
    const savedCallback = useRef();

    // Remember the latest callback.
    useEffect(() => {
        savedCallback.current = callback;
    }, [callback]);

    // Set up the interval.
    useEffect(() => {
        function tick() {
            savedCallback.current();
        }
        if (delay !== null) {
            let id = setInterval(tick, delay);
            return () => clearInterval(id);
        }
    }, [delay]);
}

function SwapImageDetail(props) {
    const [data, setData] = useState(props.route.params.data)
    const [render, setRender] = useState(true)
    let animation = useRef(new Animated.Value(0));
    const [progress, setProgress] = useState(0);
    const slideDuration = 5000;

    useInterval(() => {
        if (progress < 100) {
            setProgress(progress + 5);
        }
    }, 0);

    useEffect(() => {
        // Animated.timing(animation.current, {
        //     toValue: progress,
        //     duration: 5000,
        //     useNativeDriver: false,

        // }).start();
        Animated.loop(
            Animated.timing(animation.current, {
                toValue: progress,
                duration: slideDuration,
                useNativeDriver: false,
            }),
            { iterations: 100 },
        ).start();
    }, [progress])

    let width = animation.current.interpolate({
        inputRange: [0, 100],
        outputRange: ["0%", "100%"],
        extrapolate: "clamp"
    })



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

                <View style={{ marginBottom: -RFPercentage(2), width: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start' }}>
                    <TouchableOpacity onPress={() => console.log('back')} style={{ alignItems: 'flex-start', justifyContent: 'flex-start' }} >
                        <MaterialCommunityIcons size={RFPercentage(6)} color={colors.darkGrey} name="chevron-left" />
                    </TouchableOpacity>
                </View>

                <View style={{ marginBottom: RFPercentage(1), flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'center' }}>
                    <Text style={{ fontSize: RFPercentage(2.2), color: colors.primary }} >SIML</Text>
                </View>

                <View style={styles.progressBar}>
                    <Animated.View style={[StyleSheet.absoluteFill], { backgroundColor: colors.primary, width }} />
                </View>

                <View style={{ maxHeight: '92.5%' }} activeOpacity={0.9} onPress={() => navigation.navigate('SwapImageDetail', { data: moreDetaildata })} >
                    <ImageBackground borderBottomLeftRadius={20} borderBottomRightRadius={20} resizeMethod="resize" source={{ uri: item.image }} style={{ marginLeft: "1.5%", flexDirection: 'row', width: '97%', height: '96%', marginBottom: Platform.OS === 'ios' ? -RFPercentage(2.7) : RFPercentage(0) }} >
                        <View style={{ flexDirection: 'column', marginBottom: RFPercentage(5), flex: 1, justifyContent: 'flex-end', alignItems: 'center' }} >
                            <Text style={{ color: 'white', fontSize: RFPercentage(2) }} >Lorem ipsum, or lipsum as it.</Text>
                        </View>
                    </ImageBackground>

                </View>

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
                layout={'default'}
                loop={true}
                autoplay={true}
                autoplayInterval={slideDuration}


            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: Constants.statusBarHeight,
        backgroundColor: '#ecf0f1',
        padding: 8,
    },
    progressBar: {
        flexDirection: 'row',
        height: 4,
        width: '94%',
    }
});

export default SwapImageDetail;