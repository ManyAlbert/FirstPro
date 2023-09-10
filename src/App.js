
import './App.css';
import "./input.css";
import { Routes, Route } from "react-router-dom";
import LandingPage from './pages/LandingPage';
import Navbar from './components/Navbar';
import DetailPage from './pages/DetailPage';

function App() {
  return (
    <div className="bg-gradient-to-b from-[#D1F5F5] via-[#F6F7B9] to-[#F7B9F4] h-screen">
      <Navbar/>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/details" element={<DetailPage />} />
      </Routes>
    </div>
  );
}

export default App;
