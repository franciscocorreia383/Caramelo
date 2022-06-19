import { Text, View, Image } from "react-native";
import { Title, Container, Info, Donor } from "./styles"
import { AntDesign } from "@expo/vector-icons"
import { Avatar } from '../Avatar'

type Props = {
    id: number
    image: string
    title: string
    doador: string
    star: boolean
}

export function Card({ id, image, title, doador, star }: Props) {

    function handlePressCard() {
        console.log(title);
        
    }

    return (
        <Container>
            <Avatar
                id={id}
                image={image}
            />
            <Info>
                <Title>{title}</Title>
                <Donor>{doador}</Donor>
            </Info>
            <AntDesign
                name="star"
                size={34}
                color={star ? "yellow" : "white"}
                onPress={handlePressCard}
            />
        </Container>
    )
}