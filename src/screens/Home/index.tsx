import React, { useEffect, useState } from 'react';
import { AsyncStorage } from 'react-native'
import { Container, Title, Header, Flat } from './styles'
import { AntDesign } from '@expo/vector-icons'

import { Card } from '../../components/Card'
import { SearchBar } from 'react-native-elements';

export function Home() {

    const [data, setData] = useState(null)
    const [searchName, setSearchName] = useState('search1');
    const [fav, setFav] = useState(false);

    async function loadData() {
        try {
            var dataStorage = await AsyncStorage.getItem("DataList").then(res => JSON.parse(res));

            if (dataStorage !== null) {
                console.log(dataStorage);
                
                setData(dataStorage)
            }else{

                const defaultData = [
                    {
                        id: 1,
                        image: 'https://www.petlove.com.br/images/breeds/193223/profile/original/golden_retriever-p.jpg?1532539102',
                        title: 'Golden Retriever',
                        doador: 'Independente',
                        star: false,
                        raca: 'Golden Retriever',
                        cidade: 'Fortaleza',
                        endereco: 'Rua x, 222, Bairr 1',
                        fone: '(85) 9885874444',
                    },
                    {
                        id: 2,
                        image: 'https://www.dci.com.br/wp-content/uploads/2020/09/1300x0_1568662224_5d7fe2d09bccd.jpeg',
                        title: 'Caramelo',
                        doador: 'Lar São Lazaro',
                        star: false,
                        raca: 'Vira Lata',
                        cidade: 'Maracanau',
                        endereco: 'Rua x, 232, Bairro industrial',
                        fone: '(85) 98741541547',
                    },
                    {
                        id: 3,
                        image: 'https://www.hypeness.com.br/1/2019/09/Vira-lata_Caramelo_1.jpg',
                        title: 'Vira Lata',
                        doador: 'Independente',
                        star: false,
                        raca: 'Vira Lata',
                        cidade: 'Fortaleza',
                        endereco: 'Rua z, 211, Bairro Aldeota',
                        fone: '(85) 5874874444',
                    },
                    {
                        id: 4,
                        image: 'https://i.pinimg.com/originals/c7/0f/1b/c70f1bc999d70c0864103ed3862f7464.jpg',
                        title: 'Vira Lata',
                        doador: 'Lar Sao Pedro',
                        star: false,
                        raca: 'Vira Lata',
                        cidade: 'Fortaleza',
                        endereco: 'Rua F, 857, Bairro Lagoa',
                        fone: '(85) 98858587444',
                    },
                    {
                        id: 5,
                        image: 'https://www.hypeness.com.br/1/2019/09/Vira-lata_Caramelo_1.jpg',
                        title: 'Vira Lata',
                        doador: 'Independente',
                        star: false,
                        raca: 'Vira Lata',
                        cidade: 'Fortaleza',
                        endereco: 'Rua W, 2472, Bairro José Walter',
                        fone: '(85) 9885874974',
                    },
                    {
                        id: 6,
                        image: 'https://www.racoesreis.com.br/wordpress/wp-content/uploads/imagem_do_post-64.jpg',
                        title: 'Vira Lata',
                        doador: 'Lar Sao Pedro',
                        star: false,
                        raca: 'Vira Lata',
                        cidade: 'Fortaleza',
                        endereco: 'Rua H, 222, Bairro Parangaba',
                        fone: '(85) 98858741452',
                    },
                    {
                        id: 7,
                        image: 'https://www.petz.com.br/blog/wp-content/uploads/2020/01/vira-lata-caramelo-cao.jpg',
                        title: 'Vira Lata',
                        doador: 'Independente',
                        star: false,
                        raca: 'Vira Lata',
                        cidade: 'Caucaia',
                        endereco: 'Rua J, 2122, Bairro Centro',
                        fone: '(85) 98858758554',
                    },
                    {
                        id: 8,
                        image: 'https://upload.wikimedia.org/wikipedia/commons/7/70/Serena_REFON.jpg',
                        title: 'Vira Lata',
                        doador: 'Lar Sao Pedro',
                        star: false,
                        raca: 'Vira Lata',
                        cidade: 'Fortaleza',
                        endereco: 'Rua K, 222, Bairro Lagoa',
                        fone: '(85) 9885873494',
                    }
                ]

                await AsyncStorage.setItem("DataList", JSON.stringify(defaultData))
                console.log("Dados inseridos");

                loadData()
            }
        } catch (err) {
            console.log("Deu erro"+err);

        }
    }   

    function handleClickFav() {
        if (fav) {
            reloadData()
            setFav(false);
            setSearchName('staro')
        } else {
            reloadData()
            setFav(true);
            setSearchName('close')
        }
    }

    async function reloadData(){
        try {
            await AsyncStorage.getItem("DataList").then(res => JSON.parse(res)).then(res => {
                setData(res)
            })
        } catch (error) {
            console.log(error.message);
            
        }
    }
        
    useEffect(() => {
        loadData()
    },[])
    
    //AsyncStorage.removeItem("DataList").then(res => {setData(null)});

    return (
        <Container>
            <Header>
                <Title>Caramelo</Title>
                <AntDesign.Button name={searchName} size={20} color="white" style={{ backgroundColor: 'red' }} onPress={handleClickFav}> Favoritos </AntDesign.Button>
            </Header>

            {
                fav ?
                <Flat
                data={data}
                renderItem={({ item, index }) => {
                    if (item.star) {
                        return (
                            <Card
                                key={index}
                                keyId={index}
                                id={item.id}
                                image={item.image}
                                doador={item.doador}
                                title={item.title}
                                star={item.star}
                                cidade={item.cidade}
                                endereco={item.endereco}
                                fone={item.fone}
                                raca={item.raca}
                            />
                        )
                    }
                }}
            />
                :
                <Flat
                data={data}
                renderItem={({ item, index }) => {
                    return (
                        <Card
                            key={index}
                            keyId={index}
                            id={item.id}
                            image={item.image}
                            doador={item.doador}
                            title={item.title}
                            star={item.star}
                            cidade={item.cidade}
                            endereco={item.endereco}
                            fone={item.fone}
                            raca={item.raca}
                        />
                    )
                }}
            />
            }

        </Container>
    )
}
