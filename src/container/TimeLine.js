import React from "react";
import {StyleSheet, Text, View, ScrollView, AsyncStorage} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import {GiftedChat} from 'react-native-gifted-chat'
import {
    compose,
    applyMiddleware,
    combineReducers,
    createStore,
} from 'redux';
import {connect} from 'react-redux'
import {config} from "../../env";
import * as firebase from 'firebase';
// firebase.initializeApp(config);

export default class App extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            messages: [],
            userId: ""
        }
        this.addAuto = this.addAuto.bind(this)
    }

    componentWillMount() {

        AsyncStorage.getItem('userId').then((value) => {

            this.setState({
                userId: value
            })
        })

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

    componentDidMount() {

    }

    addAuto() {
    }

    onSend(messages = []) {
         const { text,_id,user,createdAt} = messages[0]
        console.log(new Date(createdAt))
        firebase.database().ref("messages/" + _id).set({
                 messages: messages[0],
                 createdAt: `${createdAt}`
        })
        this.setState(previousState => ({
            messages: GiftedChat.append(previousState.messages, messages),
        }))
    }

    onPressLoad(){
        firebase.database().ref('messages').on('value', (snapshot) => {
          console.log(snapshot.val());
        })

    }

    render() {
        // try {
        //   const value = await AsyncStorage.getItem('userId')
        // } cache {
        //   //OMG
        // }
        return (
            <GiftedChat
                loadEarlier={true}
                onLoadEarlier={() => this.onPressLoad()}
                messages={this.state.messages}
                onSend={messages => this.onSend(messages)}
                user={{
                    _id: this.state.userId
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
