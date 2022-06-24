import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {Navbar} from './componnents/navbar/Navbar'
import Home from './componnents/pages/Home'
import Aboutus from './componnents/pages/Aboutus'
import Careers from './componnents/pages/Careers'
import Contactus from './componnents/pages/Contactus'
import Products from './componnents/pages/Products'
import Services from './componnents/pages/Services'

function App() {
  return (
    <BrowserRouter className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/aboutus" element={<Aboutus />}/>
        <Route path="/careers" element={<Careers />}/>
        <Route path="/contactus" element={<Contactus />}/>
        <Route path="/products" element={<Products />}/>
        <Route path="/services" element={<Services />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
