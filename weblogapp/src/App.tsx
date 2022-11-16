
import React from 'react';
import './styles/App.css';
//import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages';
import Articles from './pages/articles';
import About from './pages/about';
import Contact from './pages/contact';
import Search from './pages/search';
import SignUp from './pages/sign-up';
import SignIn from './pages/sign-in';

function App(): JSX.Element {
return (
  <Router>
    {/* <Navbar /> */}
    <Routes>
      <Route exact path='/' exact element={<Home/>} />
      <Route path='/articles' element={<Articles/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='/search' element={<Search/>} />
      <Route path='/sign-up' element={<SignUp/>} />
      <Route path='/sign-in' element={<SignIn/>} />
    </Routes>
  </Router>
  );
}

export default App;
