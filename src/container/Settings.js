import React, {Component} from 'react';
import {Container, Header, Content, Card, CardItem, Text, Right,ListItem,List} from 'native-base';

export default class CardListExample extends Component {
    render() {
        return (
            <Container>
                <Header/>
                <Content>
                    <List>
                        <ListItem>
                            <Text>このアプリをシェア</Text>
                        </ListItem>

                        <ListItem>
                            <Text>レビューを書く</Text>
                        </ListItem>
                    </List>

                </Content>
            </Container>
        );
    }
}