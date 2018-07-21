import React from 'react';
import {
    createBottomTabNavigator, createStackNavigator,
} from 'react-navigation'
import Settings from './container/Settings'
import Main from './container/Main'
import TimeLine from './container/TimeLine'

import { Ionicons } from '@expo/vector-icons';


const MainStack = createStackNavigator({
    Main: Main,
});

const TimeLineStack = createStackNavigator({
    TimeLine: TimeLine,
});


const SettingStack = createStackNavigator({
    Settings: Settings,
});


export default createBottomTabNavigator({
    Main: {
        screen: MainStack,
        navigationOptions: {
            tabBarIcon: <Ionicons name="md-checkmark-circle" size={32} color="green"/>

        }

    },
    TimeLine: TimeLineStack,
    Settings: SettingStack

}, {
    tabBarOptions: {
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
    },
});
