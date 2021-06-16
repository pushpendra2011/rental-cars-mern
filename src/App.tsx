import styled from 'styled-components';
import tw from 'twin.macro';
import './App.css';
import { HomePage } from './app/containers/Home';
import {BrowserRouter as Router} from 'react-router-dom'

const AppContainer = styled.div`
${tw`
flex
flex-col
w-full
h-full
`}
`

function App() {
  return (
    <Router>
    <AppContainer>
      <HomePage />
    </AppContainer>
    </Router>
  );
}

export default App;
