import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from '../src/pages/home'
import Header from './component/header'
import Natifs from './pages/Natifs'
import Sulfures from './pages/Sulfures'
import Halogenures from './pages/Halogenures'
import Carbonates from './pages/Carbonates'
import Sulfates from './pages/Sulfates'
import Phosphates from './pages/Phosphates'
import Silicates from './pages/Silicates'




function App() {
  return (
    <>
    <Router>
      <Header />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/natifs'>
          <Natifs />
        </Route>
        <Route path='/sulfures'>
          <Sulfures />
        </Route>
        <Route path='/halogenures'>
          <Halogenures />
        </Route>
        <Route path='/carbonates'>
          <Carbonates />
        </Route>
        <Route path='/sulfates'>
          <Sulfates />
        </Route>
        <Route path='/phosphates'>
          <Phosphates />
        </Route>
        <Route path='/silicates'>
          <Silicates />
        </Route>
      </Switch>
    </Router>
    </>
  );
}

export default App;
