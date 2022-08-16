import {BrowserRouter, Routes, Route} from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Home from "./pages/Home/Home";
import Hotel from "./pages/Hotel/Hotel";
import HotelList from "./pages/HotelList/HotelList";
import './App.css'

function App() {
  return (
    <div className="App">
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/hotels" element={<HotelList/>} />
          <Route path="hotels/:id" element={<Hotel/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
