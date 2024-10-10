import React from 'react';
import './About.css';
import sectionImage1 from '../../assets/coffee-4054332_1280.jpg';
import sectionImage2 from '../../assets/wp13360393-cozy-coffee-shop-wallpapers.jpg';
import sectionImage3 from '../../assets/wp13360367-cozy-coffee-shop-wallpapers.jpg';
import backgroundVideo from '../../assets/3135926-hd_1920_1080_30fps.mp4'; // Add your video path here

const About = () => {
  return (
    <div className="about-container">
     
      {/* Autoplay Video Section */}
      <div className="video-section">
  <video autoPlay loop muted className="background-video">
    <source src={backgroundVideo} type="video/mp4" />
    Your browser does not support the video tag.
  </video>
  <div className="video-overlay">
    <h1>Brew Crafters</h1>
  </div>
</div>

      <h1>About Us</h1>

      <div className="about-section">
        <img src={sectionImage1} alt="About Us" className="about-image" />
        <div className="about-info">
          <h2>Our Mission</h2>
          <p>
            At Brew Crafters, we strive to provide the finest coffee experience 
            by sourcing the best beans from around the world. Our mission is to 
            create connections through quality coffee.
          </p>
        </div>
      </div>

      <div className="about-section reverse">
        <div className="about-info">
          <h2>Our Values</h2>
          <p>
            We believe in sustainability, community, and quality. Our values 
            drive us to support local farmers and create a positive impact on 
            the environment.
          </p>
        </div>
        <img src={sectionImage2} alt="Our Values" className="about-image" />
      </div>

      <div className="about-section">
        <img src={sectionImage3} alt="Our Story" className="about-image" />
        <div className="about-info">
          <h2>Our Story</h2>
          <p>
            Founded in 2020, Brew Crafters started as a small coffee shop 
            and has grown into a beloved community hub, where coffee lovers 
            come together to enjoy the rich flavors and unique blends we offer.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
