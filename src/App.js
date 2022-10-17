import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Begin from './components/Begin';
import About from './components/About';
import Contact from './components/Contact';
import Product from './components/Product';
// import { Routes ,Route } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Header/>
     <Routes>
        <Route exact path="/" element={<Begin/>} />
        <Route exact path="/products" element={<Product/>} />
        <Route exact path="/products/:id" element={<Product/>} />
        <Route exact path="/about" element={<About/>} />
        <Route  path="/contact" element={<Contact/>} />
     </Routes>
     <Begin/>
     <Footer/>
    </div>
  );
}

export default App;
