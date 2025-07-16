
import './App.css'
import HomePage from './HomePage'
import Navbar from './components/Navbar'
import ProductPage from './ProductPage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product" element={<ProductPage />} />
        {/* <Route path="/oral-health" element={<OralHealth />} />
        <Route path="/contact" element={<ContactUs />} /> */}
      </Routes>
    </Router>
  )
}

export default App
