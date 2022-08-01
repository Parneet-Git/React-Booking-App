import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home/Home";
import Hotel from "./pages/Hotel/Hotel";
import HotelList from "./pages/HotelList/HotelList";

function App() {
  return (
    <div className="App">
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
