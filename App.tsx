import { Home } from './src/screens/Home'
import { Container } from './styles'
import { StatusBar } from 'react-native';

export default function App() {

  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Home />
    </Container>
  );
}

