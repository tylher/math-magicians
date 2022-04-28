import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Calculator } from './components/Calculator';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Quote from './pages/Quotes';

const App = () => (
  <>
    <NavBar />
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="Calculator" element={<Calculator />} />
      <Route path="Quotes" element={<Quote />} />
    </Routes>
  </>
);

export default App;
