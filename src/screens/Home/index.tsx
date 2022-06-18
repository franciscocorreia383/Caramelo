import React from 'react';
import { Text } from 'react-native';
import { Container, Title, Header } from './styles'
import {AntDesign} from '@expo/vector-icons'

//const data = 

export function Home() {

    return (
        <Container>
            <Header>
                <Title>Caramelo</Title>
                <AntDesign.Button name="search1" size={24} color="black" > Procurar </AntDesign.Button>
            </Header>
        </Container>
    )
}
