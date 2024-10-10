import React, { useState } from 'react';
import './Location.css';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import img1 from '../../assets/buildings-1836478_1280.jpg';
import img2 from '../../assets/pexels-ekrulila-11364193.jpg';
import img3 from '../../assets/pexels-igor-starkov-233202-1055054.jpg';
import img4 from '../../assets/pexels-orlovamaria-4906513.jpg';

// Location data including latitude and longitude for each location
const locations = [
  {
    id: 1,
    name: "Downtown Cafe",
    address: "123 Main St, Downtown",
    imageUrl: img1,
    lat: 40.7128, // Example coordinates (replace with real ones)
    lng: -74.0060
  },
  {
    id: 2,
    name: "Uptown Coffee House",
    address: "456 Uptown Ave, Uptown",
    imageUrl: img2,
    lat: 40.785091,
    lng: -73.968285
  },
  {
    id: 3,
    name: "Suburban Brew",
    address: "789 Suburban Blvd, Suburbia",
    imageUrl: img3,
    lat: 40.730610,
    lng: -73.935242
  },
  {
    id: 4,
    name: "Lakeside Cafe",
    address: "321 Lakeside Dr, Lakeside",
    imageUrl: img4,
    lat: 34.052235,
    lng: -118.243683
  },
];

const mapContainerStyle = {
  height: '400px',
  width: '100%',
};

const center = {
  lat: 40.730610, // Default center (New York City)
  lng: -73.935242,
};

const Location = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLocation, setSelectedLocation] = useState(null);

  const filteredLocations = locations.filter(location =>
    location.address.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="location-container">
      <h1>Our Locations</h1>
      <input
        type="text"
        placeholder="Search by address..."
        className="search-bar"
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      />

      <LoadScript
        googleMapsApiKey="YOUR_VALID_GOOGLE_MAPS_API_KEY" // Replace this with your valid key
      >
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          center={selectedLocation ? { lat: selectedLocation.lat, lng: selectedLocation.lng } : center}
          zoom={12}
        >
          {filteredLocations.map(location => (
            <Marker
              key={location.id}
              position={{ lat: location.lat, lng: location.lng }}
              onClick={() => setSelectedLocation(location)}
            />
          ))}
        </GoogleMap>
      </LoadScript>

      <div className="location-list">
        {filteredLocations.length > 0 ? (
          filteredLocations.map(location => (
            <div key={location.id} className="location-item">
              <img src={location.imageUrl} alt={location.name} className="location-image" />
              <div className="location-info">
                <h2>{location.name}</h2>
                <p>{location.address}</p>
              </div>
            </div>
          ))
        ) : (
          <p>No locations found.</p>
        )}
      </div>

      <div className="contact-container">
        <h1>Contact Us</h1>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="6"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <button type="submit" className="submit-button">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Location;
