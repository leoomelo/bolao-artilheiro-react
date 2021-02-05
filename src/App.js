import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Menu from '../src/components/Menu';
import LeagueContainer from '../src/components/LeagueContainer';
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
      {/* <Menu /> */}
      <MainContainer>
        {/* <LeagueContainer /> */}
        {/* <div>Campeonato Brasileiro Série A</div> */}
        
          <CardContainer />
          <Standings />
        
      </MainContainer>
    </>
  );
}

export default App;
