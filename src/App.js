import './App.css';
import { Calculator } from './components/Calculator';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Quote from './pages/Quotes';

const App = () => (
  <>
    <NavBar />
    <Calculator />
    <Home />
    <Quote />
  </>
);

export default App;
