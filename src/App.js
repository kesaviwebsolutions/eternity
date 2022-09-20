import './App.css';
import Footer from './Components/Footer';

import Main1 from './Components/Main1';

import Navbar1 from './Components/Navbar1';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="App">
     {/* <Navbar/> */}
     <Navbar1/>
     <Main1/>
     <Footer/>
    </div>
  );
}

export default App;
