import { View, Text } from "react-native";
import { Container, Detail } from "./styles"

type Props = {
    doador: string;
    raca: string;
    cidade: string;
    endereco: string;
    fone: string;
}

export function Details({ doador, cidade, endereco, fone, raca }: Props) {

    return (
        <Container>

            <Detail>Raça: {raca}</Detail>
            <Detail>Doador: {doador}</Detail>
            <Detail>Cidade: {cidade}</Detail>
            <Detail>Endereço: {endereco}</Detail>
            <Detail>Fone: {fone}</Detail>

        </Container>
    )
}