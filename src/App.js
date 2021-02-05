import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import CardContainer from '../src/components/CardContainer';
import Standings from '../src/components/Standings';

const MainContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: baseline;
`

function App() {
  return (
    <>
      <MainContainer>
          <CardContainer />
          <Standings />
      </MainContainer>
    </>
  );
}

export default App;
