import './App.css'
import HomePage from './pages/HomePage'
import Navbar from './components/Navbar'
import ProductPage from './pages/ProductPage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import ContactUs from './pages/ContactUs';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product" element={<ProductPage />} />
        {/* <Route path="/oral-health" element={<OralHealth />} /> */}
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
