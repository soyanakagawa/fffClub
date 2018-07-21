import React from "react";
import {StyleSheet, Text, View} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import {GiftedChat} from 'react-native-gifted-chat'
import {
    applyMiddleware,
    combineReducers,
    createStore,
} from 'redux';

export default class App extends React.Component {

    state = {
        messages: [],
    }

    componentWillMount() {
        this.setState({
            messages: [
                {
                    _id: 1,
                    text: 'こんにちは',
                    createdAt: new Date(),
                    user: {
                        _id: 2,
                        name: 'React Native',
                        avatar: 'https://placeimg.com/140/140/any',
                    },
                },
                {
                    _id: 3,
                    text: 'This is a system message',
                    createdAt: new Date(Date.UTC(2016, 5, 11, 17, 20, 0)),
                    system: true,
                    // Any additional custom parameters are passed through
                }
            ],
        })
    }

    onSend(messages = []) {
        this.setState(previousState => ({
            messages: GiftedChat.append(previousState.messages, messages),
        }))
    }

    render() {
        return (
            <GiftedChat
                messages={this.state.messages}
                onSend={messages => this.onSend(messages)}
                user={{
                    _id: 1,
                }}
            />
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
