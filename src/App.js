import "./App.css";
import Footer from "./Components/Footer";

import Navbar1 from "./Components/Navbar1";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Activestake from "./Components/Activestake";
import Home from "./Components/pages/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar1 />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/active-stake" element={<Activestake />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
