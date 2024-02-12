
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Reserve from './pages/Reserve';
import ReserveComplete from './pages/ReserveComplete';
import OnlineMenu from './pages/OnlineMenu';
import Bottom from './components/Bottom';
import About from './pages/About';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/reserve' element={<Reserve />} />
        <Route path='/reserve-complete' element={<ReserveComplete />} />
        <Route path='/online-menu' element={<OnlineMenu />} />
        <Route path='/about' element={<About />} />
      </Routes>
      <div className='footer'>
        <Bottom />
      </div>
    </BrowserRouter>

  );
}

export default App;
