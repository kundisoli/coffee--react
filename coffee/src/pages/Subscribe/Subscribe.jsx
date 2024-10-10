import React from 'react';
import './Subscribe.css';
import subscriptionImage from '../../assets/pexels-wondererphotograph-2564081.jpg'; // Replace with correct path

const Subscribe = () => {
  return (
    <div className="subscribe-container">
      {/* First Section */}
      <section className="subscribe-section top-section">
        <img src={subscriptionImage} alt="Brew Crafters Subscription" className="subscribe-image" />
        <div className="subscribe-text">
          <h2>Subscribe to Brew Crafters and Enjoy Fresh Coffee Anytime</h2>
          <p>
            Brew Crafters offers a meticulously curated coffee experience delivered to your doorstep. 
            With fresh, premium beans sourced from the finest regions, we ensure that every cup 
            brings out the rich flavors and aromas you love. Our subscription plans are flexible and 
            tailored to your taste, with easy cancellations anytime.
          </p>
        </div>
      </section>

      {/* Second Section */}
      <section className="subscribe-section">
        <div className="subscribe-option">
          <h3>Subscribe today!</h3>
          <p>
            Get your favorite coffee delivered straight to your home on a monthly basis. 
            Simply select your preferred quantity and we'll take care of the rest, 
            ensuring freshly roasted beans delivered right to your door.
          </p>
          <button className="subscribe-button">Sign me up!</button>
        </div>
        <div className="subscribe-option">
          <h3>Give as a gift</h3>
          <p>
            Share the love of coffee with a Brew Crafters gift subscription. We’ll send a personalized 
            card to your recipient, and they can start enjoying their monthly dose of rich, flavorful coffee.
          </p>
          <button className="subscribe-button">Set up Gift Subscription</button>
        </div>
      </section>
    </div>
  );
};

export default Subscribe;
