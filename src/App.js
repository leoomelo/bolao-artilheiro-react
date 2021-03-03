import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import CardContainer from '../src/components/CardContainer';
// import Standings from '../src/components/Standings';
import Menu from '../src/components/Menu';

const MainContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: baseline;
  margin: 0 20%;
`

function App() {
  // let matches = [];

  

  return (
    <>
      <Menu />
      <MainContainer>
          <div className="league-title text-center">Próximos Jogos</div>
          <div className="container-info">
            <CardContainer />
            {/* <Standings /> */}
          </div>
      </MainContainer>
    </>
  );
}

export default App;
