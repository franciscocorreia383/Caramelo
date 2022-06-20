import React, { useState, useEffect } from 'react';
import { View, AsyncStorage } from "react-native";
import { Title, Container, Info, Donor, CardView } from "./styles"
import { AntDesign } from "@expo/vector-icons"
import { Avatar } from '../Avatar'


import { Details } from '../Details/index'

export type Props = {
    keyId: number;
    id: number
    image: string
    title: string
    doador: string
    star: boolean
    raca: string;
    cidade: string;
    endereco: string;
    fone: string;
}

export function Card({ id, image, title, doador, star, cidade, endereco, fone, raca, keyId }: Props) {

    const [details, setDetails] = useState(false)
    const [data, setData] = useState(null)
    const [fav, setFav] = useState(star)

    async function handlePressStar() {
        try {
            await AsyncStorage.getItem("DataList").then(res => JSON.parse(res)).then(res => {setData(res)});
            
            if (data[keyId].star) {
                setFav(false);
                let dados = data
                dados[keyId].star = false

                console.log(dados[keyId].title);
                
                setData({data: dados})

                await AsyncStorage.removeItem("DataList")
                await AsyncStorage.setItem("DataList",JSON.stringify(data))
            }else{
                setFav(true);
                let dados = data
                dados[keyId].star = true

                console.log(dados[keyId].star);
                setData({data: dados})
                
                await AsyncStorage.removeItem("DataList")
                await AsyncStorage.setItem("DataList",JSON.stringify(data))
                
            }

        } catch (error) {
            console.log(error.message);
        }

    }

    function handlePressCard() {
        if (details) {
            setDetails(false)
        } else {
            setDetails(true)
        }
    }

    return (
        <Container>
            <CardView>
                <View
                    onTouchEnd={handlePressCard}
                >
                    <Avatar
                        id={id}
                        image={image}
                    />
                </View>

                <Info
                    onTouchEnd={handlePressCard}
                >
                    <Title>{title}</Title>
                    <Donor>{doador}</Donor>
                </Info>
                <AntDesign
                    name="star"
                    size={34}
                    color={fav ? "yellow" : "white"}
                    onPress={handlePressStar}
                />

                
            </CardView>
            {
                    details ?
                        <Details
                            raca={raca}
                            doador={doador}
                            cidade={cidade}
                            endereco={endereco}
                            fone={fone}
                        /> : null
                }
        </Container>
    )
}