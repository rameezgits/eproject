import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Header from './components/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import News from './pages/News';
import About from './pages/About';
import Pricing from './pages/Pricing';
import Rooms from './pages/Rooms';
import RoomSuits from './pages/RoomSuits';
import RoomDetails from './pages/RoomDetails';
import Team from './pages/Team';
import Faq from './pages/Faq';
import Booking from './pages/Booking';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/news' element={<News/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/pricing' element={<Pricing/>}/>
          <Route path='/booking' element={<Booking/>}/>
          <Route path='/team' element={<Team/>}/>
          <Route path='/rooms' element={<Rooms/>}/>
          <Route path='/faq' element={<Faq/>}/>
          <Route path='/rooms-suits' element={<RoomSuits/>}/>
          <Route path='/room-details' element={<RoomDetails/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
