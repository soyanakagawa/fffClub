import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View, Image
} from 'react-native';
import {BlurView} from 'expo';

import Swiper from 'react-native-swiper';

const uri = 'https://pbs.twimg.com/profile_images/552762766830739456/rFzpQFJN_400x400.jpeg';

const styles = StyleSheet.create({
    container: {
        height: 100,
        alignItems: "center",
        justifyContent: "center"
    },
    wrapper: {},
    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9DD6EB',
    },
    slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#97CAE5',
    },
    slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#92BBD9',
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
    }
})

export default class Main extends Component {
    render() {
        return (
            <BlurView tint="dark" intensity={5} style={StyleSheet.absoluteFill}>
                <View
                    style={styles.container}>
                    <Swiper style={styles.wrapper}
                            horizontal={false}
                            autoplay={true}
                            showsPagination={false}>
                        <View style={styles.slide1}>
                            <Text style={styles.text}>Lead Enginner</Text>
                        </View>
                        <View style={styles.slide2}>
                            <Text style={styles.text}>フォロワー90000人</Text>
                        </View>
                        <View style={styles.slide3}>
                            <Text style={styles.text}>Yushimatenjin</Text>
                        </View>
                    </Swiper>
                </View>
                <Image style={{flex: 1}} source={{uri}}/>
            </BlurView>
        );
    }
}

AppRegistry.registerComponent('myproject', () => Swiper);