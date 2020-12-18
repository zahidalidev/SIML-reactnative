import React, { useState } from 'react';
import { Dimensions, Image, ImageBackground, StyleSheet, View, Text } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { MaterialCommunityIcons } from "@expo/vector-icons"
import { RFPercentage } from 'react-native-responsive-fontsize';

const screenWidth = Dimensions.get('window').width

function SwapImage(props) {

    const [render, setRender] = useState(true)

    const [data, setData] = useState([
        {
            id: 1,
            image: 'https://i.pinimg.com/736x/ff/cf/c4/ffcfc429357d09a1fd376de27af02b2b.jpg',
            liked: true
        },
        {
            id: 2,
            image: 'https://images.unsplash.com/photo-1534425240762-0890ffd1d24a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxMjA3fDB8MXxzZWFyY2h8MXx8d2FsbHBhcGVyJTIwZm9yJTIwbW9iaWxlfHwwfHx8&ixlib=rb-1.2.1&q=80&w=1080',
            liked: false
        },
    ])

    const handleLike = (item) => {
        // const data2 = data;

        const index = data.indexOf(item)

        data[index].liked = !data[index].liked

        setRender(!render)
        setData(data)
    }

    const renderItem = ({ item, index }) => {
        return (
            <View style={{ marginLeft: '2.5%', marginTop: RFPercentage(4), width: "95%", justifyContent: "center", alignItems: 'center' }} >
                <ImageBackground borderRadius={20} resizeMethod="resize" source={{ uri: item.image }} style={{ flexDirection: 'row', width: '100%', height: '97%' }} >
                    <View style={{ flexDirection: 'column', marginBottom: RFPercentage(6), marginLeft: RFPercentage(2), flex: 2, justifyContent: 'flex-end', alignItems: 'flex-start' }} >
                        <Text style={{ color: 'white', fontSize: RFPercentage(3) }} >Lorem ipsum</Text>
                        <Text style={{ color: 'white', fontSize: RFPercentage(1.6) }} >Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.</Text>
                    </View>
                    <View style={{ marginBottom: RFPercentage(6), marginRight: RFPercentage(2), flex: 1, justifyContent: 'flex-end', alignItems: 'flex-end' }} >
                        <MaterialCommunityIcons onPress={() => handleLike(item)} color="white" size={30} name={item.liked ? 'heart' : 'heart-outline'} />
                    </View>
                </ImageBackground>
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
                layout={'tinder'}
                loop={true}
                layoutCardOffset={0}
                // directionalLockEnabled={true}
                // disableIntervalMomentum={true}
                useScrollView={true}
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