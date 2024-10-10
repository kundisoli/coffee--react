import React from 'react';
import './BookingPage.css';
import logo from '../../assets/brewcrafters-high-resolution-logo.png'; // Ensure you have a logo file or image for the company

const BookingPage = () => {
  return (
    <div className="booking-page">
      <div className="description-section">
        <div className="text-section">
          <h2>A Unique Coffee Experience</h2>
          <h1 className="soul-title">The Soul of Coffee</h1>
          <p>
            At Brew Crafters, we believe that coffee has a soul, one that not everyone may understand. 
            Whether it's about local roasting or the story of a single origin roast, we craft our coffee 
            for those who appreciate every cup. It’s more than just a drink; it's about craftsmanship, 
            rooted in community and hospitality. Our coffee tells a story—one of dedication, warmth, 
            and flavor. Come and experience the soul of coffee with us. You can now boook at your favourite place.
          </p>
          <button className="cta-button">Watch Our Coffee Story</button>
        </div>
        <div className="image-section">
          <img src={logo} alt="Brew Crafters Logo" className="coffee-image"/>
        </div>
      </div>

      <div className="booking-form-section">
        <h2>Book Your Experience</h2>
        <form className="booking-form">
          <label htmlFor="name">Full Name</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="phone">Phone Number</label>
          <input type="tel" id="phone" name="phone" required />

          <label htmlFor="date">Booking Date</label>
          <input type="date" id="date" name="date" required />

          <label htmlFor="time">Preferred Time</label>
          <input type="time" id="time" name="time" required />

          <label htmlFor="guests">Number of Guests</label>
          <input type="number" id="guests" name="guests" min="1" max="20" required />

          <button type="submit" className="submit-button">Book Now</button>
        </form>
      </div>
    </div>
  );
};

export default BookingPage;
