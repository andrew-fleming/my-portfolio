import './App.css';
import Main from './components/Main'
import styled from 'styled-components'

const Background = styled.div`
  background-color: #F2F3F4;
`;

function App() {
  return (

    <Background>
      <Main/>
    </Background>
    
  );
}

export default App;
