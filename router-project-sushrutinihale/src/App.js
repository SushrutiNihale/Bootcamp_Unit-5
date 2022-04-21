import './App.css';
import { Navbar } from './components/Navbar';
import { DiscountBanner } from './components/DiscountBanner';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="App">
      <DiscountBanner></DiscountBanner>
      <Navbar></Navbar>
      <Footer></Footer>
    </div>
  );
}

export default App;
