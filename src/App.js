import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import styled from 'styled-components';
import Resources from "./pages/Resources";
import Events from './pages/Events';
import SideNav from './components/SideNav';

const MainDiv = styled.div`
  display: flex;
  flex-direction: row;
`;

function App() {
  return (
    <>
      <Router>
        <MainDiv>
          <SideNav/>
          <Switch>
            <Route exact path='/' component={Resources} />
            <Route exact path='/events' component={Events} />
          </Switch>
        </MainDiv>
      </Router>
    </>
  );
}

export default App;
