import React from 'react';
import {
    createBottomTabNavigator, createStackNavigator,
} from 'react-navigation'
import Settings from './container/Settings'
import Main from './container/Main'
import TimeLine from './container/TimeLine'

import {
    Entypo,
    EvilIcons,
    Feather,
    FontAwesome,
    Foundation,
    MaterialIcons,
    MaterialCommunityIcons,
    Octicons,
    Zocial,
    SimpleLineIcons
} from '@expo/vector-icons';


const MainStack = createStackNavigator({
    Main: {
        screen:Main,
        navigationOptions :{
            title: 'Soya Nakagawa',
        }

    },
});

const TimeLineStack = createStackNavigator({
    TimeLine: {
        screen:TimeLine,
        navigationOptions :{
            title: 'タイムライン',
        }

    },
});


const SettingStack = createStackNavigator({
    Settings: {
        screen:Settings,
        navigationOptions :{
            title: '設定',
        }

    },
});



export default createBottomTabNavigator({
    Main: {
        screen: MainStack,
        navigationOptions: {
            tabBarIcon: <EvilIcons name="star" size={32}/>
        }
    },
    TimeLine: {
        screen:TimeLineStack,
        navigationOptions: {
            tabBarIcon: <EvilIcons name="comment" size={32}/>
        }
    },
    Settings: {
        screen:Settings,
        navigationOptions: {
            tabBarIcon: <EvilIcons name="gear" size={32}/>
        }
    }

}, {
    tabBarOptions: {
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
    },
});
