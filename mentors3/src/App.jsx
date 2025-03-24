
import './App.css'
import Home from './pages/Home';
import Consultant from './pages/consultant';
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Header from './components/Header';

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path="/consultant" element={<Consultant />} />
      </Routes>
    
      <Footer />
    
    
    </BrowserRouter>

  );
}
