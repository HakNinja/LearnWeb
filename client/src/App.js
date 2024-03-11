import { BrowserRouter ,Route, Routes} from 'react-router-dom';
import './App.css';
import ScrollToTop from './components/ScrollToTop.ScrollToTop';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import Footer from './components/Footer';
import PersonData from './components/PersonData';
import Error from './components/Error';
import LoginNew from './components/Login/LoginNew';
import Roadmap from './components/Roadmap';

import CourseList from './components/Courses/CourseList';
// import CourseDetails from './components/Courses/CourseDetails';

// import Dashboard from './pages/Dashboard'

function App() {
  return (
    <>
     <BrowserRouter>
     <ScrollToTop/>
     <Navbar />
     <Routes>
      <Route exact path='/' element={ <Home />} />
      <Route exact path='/Home' element={ <Home />} />
      <Route exact path='/login/:role' element={ <Login />} />
      <Route exact path='/signup/:role' element={ <Signup />} />
      <Route exact path='/persondata/:role' element={ <PersonData />} />
      <Route exact path='/loginnew' element={< LoginNew />}/>
      <Route exact path='/roadmap' element={< Roadmap />}/>
      
      <Route path="/courses" element={<CourseList />} />
      {/* <Route path="/courses/:courseId" element={<CourseDetails />} /> */}
      
      
      <Route path ='*' element={<Error/>}/>
      {/* <Route path='/dashboard' element={ <Dashboard />} /> */}
     
     </Routes>
     <Footer/>
     </BrowserRouter>
    </>
  );
}

export default App;
