import { BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';
import ScrollToTop from './components/ScrollToTop.ScrollToTop';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';

function App() {
  return (
    <>
     <BrowserRouter>
     <ScrollToTop/>
     <Navbar />
     <Routes>
      <Route path='/' element={ <Home />} />
     </Routes>
     </BrowserRouter>
    </>
  );
}

export default App;
