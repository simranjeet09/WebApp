import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import './App.css';
import Navbar from "./components/navbar/navbar";
import HomePage from "./pages/home/home-page";
import Footer from "./components/footer/Footer";
import About from "./pages/about/about";
import Services from "./pages/services/Services";
import Weather from "./pages/weather/Weather";
import News from "./pages/news/News";


function App() {
  return (
    <div className="App">
   <Router >
      <Navbar />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/weather" element={<Weather />} />
        <Route path="/news" element={<News />} />

        <Route
          path="*"
          element={<Navigate to="/" />}
        />
      </Routes>
    </Router>
    <Footer />
  </div>);
}

export default App;
