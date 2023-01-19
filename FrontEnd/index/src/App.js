import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../src/pages/home";
import Header from "./component/header";
import Natifs from "./pages/Family/Natifs";
import Sulfures from "./pages/Family/Sulfures";
import Halogenures from "./pages/Family/Halogenures";
import Carbonates from "./pages/Family/Carbonates";
import Sulfates from "./pages/Family/Sulfates";
import Phosphates from "./pages/Family/Phosphates";
import Silicates from "./pages/Family/Silicates";
import AddMineral from "./pages/addMineral";
import CreateAccount from "./auth/CreateAccount";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/createAccount">
            <CreateAccount />
          </Route>
          <Route path="/Natifs">
            <Natifs />
          </Route>
          <Route path="/Sulfures">
            <Sulfures />
          </Route>
          <Route path="/Halogenures">
            <Halogenures />
          </Route>
          <Route path="/Carbonates">
            <Carbonates />
          </Route>
          <Route path="/Sulfates">
            <Sulfates />
          </Route>
          <Route path="/Phosphates">
            <Phosphates />
          </Route>
          <Route path="/Silicates">
            <Silicates />
          </Route>
          <Route path="/addMineral">
            <AddMineral />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
