
import './App.css'
import HomePage from './HomePage'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/products" element={<Products />} />
        <Route path="/oral-health" element={<OralHealth />} />
        <Route path="/contact" element={<ContactUs />} /> */}
      </Routes>
    </Router>
  )
}

export default App
