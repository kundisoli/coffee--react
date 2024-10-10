import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import CateringPage from './pages/Catering/CateringPage';
import Homepage from './pages/Homepage/Homepage';
import OrderForm from './pages/Order/OrderForm';
import BookingPage from './pages/Bookings/BookingPage';
import Subscribe from './pages/Subscribe/Subscribe';
import Location from './pages/Location/Location';
import About from './pages/About/About';
import Gallery from './pages/Gallery/Gallery';
import './App.css';
import AuthForm from './pages/Login/AuthForm'; // Import the login/register form

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="content-container">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/bookings" element={<BookingPage />} />
          <Route path="/catering" element={<CateringPage />} />
          <Route path="/order" element={<OrderForm />} />
          <Route path="/subscribe" element={<Subscribe />} />
          <Route path="/location" element={<Location />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} /> {/* Gallery Page */}
          <Route path="/login" element={<AuthForm />} /> {/* Login and Registration Page */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
