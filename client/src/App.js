import { BrowserRouter ,Route, Routes} from 'react-router-dom';
import './App.css';
import ScrollToTop from './components/ScrollToTop.ScrollToTop';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar/Navbar';
import NewHome from './components/home/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import Footer from './components/common/footer/Footer';
import LoginNew from './components/Login/LoginNew';
import Roadmap from './components/Roadmap';

import React from 'react';
import CourseList from './components/Courses/CourseList';
import Contact from './components/Contact Us/Contact';

import Dashboard from './pages/Dashboard/Dashboard'
import CV from './pages/CV';
import Error from './pages/Error/Error';

import ResumeBuilderTemp1 from './components/ResumeBuilderTemp1/ResumeBuilderTemp1'


import {AuthProvider} from './context/Context'
import LoginSignup from './components/LogSign/LoginSignup';
import ThemeSelect from './components/ThemeSelect';
import Shorts from './pages/Shorts/Shorts';
import CoursesDetails from './components/Courses/CoursesDetails';
import CheckOut from './pages/CheckOut/CheckOut';
import About from './pages/About/About';
import LandingPage from './pages/Landing/LandingPage';

function App() {
  


  return (
   <>
     <BrowserRouter>
     <AuthProvider>
     <ScrollToTop/>
     <Navbar />
     <Routes>
      <Route exact path='/' element={ <LandingPage/>} />
      <Route exact path='/home' element={ <NewHome />} />
      <Route path='/about us' element={<About/>} />
      <Route exact path='/login/' element={ <Login />} />
      <Route exact path='/signup/' element={ <Signup />} />
      <Route exact path='/loginnew' element={< LoginNew />}/>
      <Route exact path='/roadmap' element={< Roadmap />}/>
      <Route path='/contactus' element={<Contact/>} />
      {/* <Route path='/test' element={<CV />} /> */}
      
      <Route path="/courses" element={<CourseList />} />
      <Route path="/coursesdetails/:slug" element={<CoursesDetails />} />
      <Route path="/checkout/:slug" element={<CheckOut />} />
      <Route path="/dashboard" element={<Dashboard />} />
      
      <Route exact path="/Resume/ResumeBuilderTemp1" element={<ResumeBuilderTemp1 />} />
      <Route path="/loginsignup" element={<LoginSignup />} />
      <Route path="/themeselect" element={<ThemeSelect />} />
      <Route path="/feeds" element={<Shorts/>} />
      <Route path="/Resume" element={<ThemeSelect />} />


      {/* <Route exact path="/Home" element={<NewHome />} /> */}

      
      {/* <Route path ='*' element={<Error/>}/> */}
      <Route path='*' element={<Error/>}/>
     
     </Routes>

     <Footer/>
     </AuthProvider>
     </BrowserRouter>
    </>
  );
}

export default App;
