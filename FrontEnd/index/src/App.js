import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from '../src/pages/home'
import Header from './component/header'
import AddMineral from './pages/addMineral'
import CreateAccount from './auth/CreateAccount'
import AuthForm from './auth/AuthForm'
import Definitions from './pages/definitions'
import FamilyPages from './pages/Family/FamilyPages'

function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path="/auth">
            <AuthForm />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/definition">
            <Definitions />
          </Route>
          <Route path="/createAccount">
            <CreateAccount />
          </Route>
          <Route path="/:family">
            <FamilyPages />
          </Route>
          <Route path="/addMineral">
            <AddMineral />
          </Route>
        </Switch>
      </Router>
    </>
  )
}

export default App
