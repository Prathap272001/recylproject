import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Footer from './components/Footer';
import Land from './components/Land';
import Sellproject from './components/Sellproject';
import Nav from './components/Nav';
import Myspace from './components/Myspace';
import Drag from './components/Drag';
function App() {
  return (
  
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Land></Land>} />
      <Route path='/nav' element={<Nav></Nav>} />
      <Route path='/footer' element={<Footer></Footer>} />
      <Route path='/selpro' element={<Sellproject/>} />
      <Route path='/myspace' element={<Myspace/>} />
      <Route path='/drag' element={<Drag/>} />




    </Routes>
    </BrowserRouter>
    
  );
}

export default App;
