import React, { useState } from 'react';
import { Container, Title, Header, Search, Body, Description } from './styles'
import { AntDesign } from '@expo/vector-icons'

import { Card } from '../../components/Card'
import { SearchBar } from 'react-native-elements';

export function Home() {

    const data = [
        {
            id: 1,
            image: 'https://www.petlove.com.br/images/breeds/193223/profile/original/golden_retriever-p.jpg?1532539102',
            title: 'Golden Retriever',
            doador: 'Independente',
            star: true,
        },
        {
            id: 2,
            image: 'https://www.dci.com.br/wp-content/uploads/2020/09/1300x0_1568662224_5d7fe2d09bccd.jpeg',
            title: 'Caramelo',
            doador: 'Lar São Lazaro',
            star: false,
        },
        {
            id: 3,
            image: 'https://www.hypeness.com.br/1/2019/09/Vira-lata_Caramelo_1.jpg',
            title: 'Vira Lata',
            doador: 'Independente',
            star: true,
        },
        {
            id: 4,
            image: 'https://i.pinimg.com/originals/c7/0f/1b/c70f1bc999d70c0864103ed3862f7464.jpg',
            title: 'Vira Lata',
            doador: 'Lar Sao Pedro',
            star: false,
        }
    ]

    const [search, setSearch] = useState(false);
    const [searchName, setSearchName] = useState('search1');

    function handleClickSearch() {
        if (search) {
            setSearch(false);
            setSearchName('search1')
        } else {
            setSearch(true);

            setSearchName('close')
        }
    }

    return (
        <Container>
            <Header>
                <Title>Caramelo</Title>
                <AntDesign.Button name={searchName} size={20} color="white" style={{backgroundColor:'red'}} onPress={handleClickSearch}> Procurar </AntDesign.Button>
            </Header>

            <Search>
                {
                    search
                        ?
                        <SearchBar
                            placeholder="Search"
                            darkTheme
                            round
                            autoCorrect={false}
                        /> : null
                }
            </Search>

            {
                data.map(card => {
                    return (
                        <Card
                            key={card.id}
                            id={card.id}
                            image={card.image}
                            doador={card.doador}
                            title={card.title}
                            star={card.star}
                        />
                    )
                })
            }

        </Container>
    )
}
