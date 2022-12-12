import { BrowserRouter as Router} from 'react-router-dom'
import Home from '../src/pages/home'
import Header from './component/header';


function App() {
  return (
    <>
    <Router>
      <Header />
        <Home />
    </Router>
    </>
  );
}

export default App;
