import React, { useState } from 'react';
import { Dimensions, Image, StyleSheet, View } from 'react-native';
import Carousel from 'react-native-snap-carousel';

const screenWidth = Dimensions.get('window').width

function SwapImage(props) {

    const [index, setIndex] = useState(0)
    const data = [
        {
            image: require('../../assets/c1.jpeg')
        },
        {
            image: require('../../assets/c2.jpg')
        },
    ]
    const renderItem = ({ item, index }) => {
        return (
            <View style={{ marginLeft: '2.5%', marginTop: 60, width: "95%", justifyContent: "center", alignItems: 'center' }} >
                <Image source={item.image} style={{ width: '100%', height: '95%' }} />
            </View>
        );
    }

    return (
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