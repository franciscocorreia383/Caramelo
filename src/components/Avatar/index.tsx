import { Avatar as Image, Container } from "./styles"

type Props = {
    id: number
    image: string
}

export function Avatar({image}:Props) {
    return(
        <Container>
            <Image source={{uri: image}} />
        </Container>
    )
}