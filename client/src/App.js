import { BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';
import ScrollToTop from './components/ScrollToTop.ScrollToTop';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import Login from './components/Login';
import Signup from './components/Signup';


function App() {
  return (
    <>
     <BrowserRouter>
     <ScrollToTop/>
     <Navbar />
     <Routes>
      <Route path='/' element={ <Home />} />
      <Route path='/' element={ <Home />} />
      <Route path='/login' element={ <Login />} />
      <Route path='/signup' element={ <Signup />} />
     </Routes>
     </BrowserRouter>
    </>
  );
}

export default App;
