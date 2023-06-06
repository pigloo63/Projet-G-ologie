import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from '../src/pages/home'
import Header from './component/header'
import AddMineral from './pages/addMineral'
import CreateAccount from './auth/CreateAccount'
import AuthForm from './auth/AuthForm'
import Definitions from './pages/definitions'
import FamilyPages from './pages/Family/FamilyPages'
import SearchMineral from './pages/SearchMineral'
import UserPages from './component/UserPages'

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
          <Route path="/userPage">
            <UserPages />
          </Route>
          <Route path="/definition">
            <Definitions />
          </Route>
          <Route path="/createAccount">
            <CreateAccount />
          </Route>
          <Route path="/addMineral">
            <AddMineral />
          </Route>
          <Route path="/searchMineral">
            <SearchMineral />
          </Route>
          <Route path="/:family">
            <FamilyPages />
          </Route>
        </Switch>
      </Router>
    </>
  )
}

export default App
