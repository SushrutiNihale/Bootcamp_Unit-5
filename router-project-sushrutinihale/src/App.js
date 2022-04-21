import './App.css';
import { Navbar } from './components/Navbar';
import { DiscountBanner } from './components/DiscountBanner';
import { Footer } from './components/Footer';
import { Route, Routes } from 'react-router-dom'
import { Products } from './components/Products';
import { About } from './components/About';
import { FAQ } from './components/FAQ';
import { Contact } from './components/Contact';

function App() {
  return (
    <div className="App">
      <DiscountBanner />
      <Navbar />
      <Routes>
        <Route path={"/products"} element={<Products />}></Route>
        <Route path={"/about"} element={<About />}></Route>
        <Route path={"/contact"} element={<Contact />}></Route>
        <Route path={"/faq"} element={<FAQ />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
