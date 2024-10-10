import React from 'react';
import './Catering.css'; 
import prod1 from '../../assets/coffee-7792248_640.jpg';
import prod2 from '../../assets/pexels-mohammad-mohebbi-69812696-19027474.jpg';
import prod3 from '../../assets/pexels-fotios-photos-2374795.jpg';
import prod4 from '../../assets/frappucino.jpg';
import prod5 from '../../assets/icedtea.jpg';
import prod6 from '../../assets/hottea.jpg';
import prod7 from '../../assets/pexels-asphotograpy-96620.jpg';
import prod8 from '../../assets/jump-vintage-soda-bottle-1708219_640.jpg';
import prod9 from '../../assets/pexels-rajesh-tp-749235-1633525.jpg';
import prod10 from '../../assets/pexels-jerchung-2116090.jpg';
import prod11 from '../../assets/pexels-brigitte-tohm-36757-239578.jpg';
import prod12 from '../../assets/pexels-fotios-photos-1894325.jpg';
import prod13 from '../../assets/pexels-chevanon-333523.jpg';
import prod14 from '../../assets/Ground_coffee.jpg';
import prod15 from '../../assets/pexels-cottonbro-4829069.jpg';
import prod16 from '../../assets/kcups.jpg';


const drinksItems = [
  { name: 'Hot Coffees', imgSrc: prod1 },
  { name: 'Cold Coffees', imgSrc: prod2 },
  { name: 'Starbucks Refreshers® Beverages', imgSrc: prod3 },
  { name: 'Frappuccino® Blended Beverages', imgSrc: prod4 },
  { name: 'Iced Tea & Lemonade', imgSrc: prod5 },
  { name: 'Hot Teas', imgSrc: prod6 },
  { name: 'Milk, Juice & More', imgSrc: prod7 },
  { name: 'Bottled Beverages', imgSrc: prod8 },
];

const foodItems = [
  { name: 'Sandwiches', imgSrc: prod9 },
  { name: 'Salads', imgSrc: prod10 },
  { name: 'Pastries', imgSrc: prod11 },
  { name: 'Snacks', imgSrc: prod12 },
];

const coffeeItems = [
  { name: 'Whole Bean Coffee', imgSrc: prod13 },
  { name: 'Ground Coffee', imgSrc: prod14 },
  { name: 'VIA® Instant', imgSrc: prod15 },
  { name: 'K-Cups®', imgSrc: prod16 },
];

const CateringPage = () => {
  return (
    <div className="catering-page">
      <h2>Drinks</h2>
      <div className="menu-grid">
        {drinksItems.map((item, index) => (
          <div key={index} className="menu-item">
            <img src={item.imgSrc} alt={item.name} className="menu-image" />
            <p>{item.name}</p>
          </div>
        ))}
      </div>

      <h2>Food</h2>
      <div className="menu-grid">
        {foodItems.map((item, index) => (
          <div key={index} className="menu-item">
            <img src={item.imgSrc} alt={item.name} className="menu-image" />
            <p>{item.name}</p>
          </div>
        ))}
      </div>

      <h2>At Home Coffee</h2>
      <div className="menu-grid">
        {coffeeItems.map((item, index) => (
          <div key={index} className="menu-item">
            <img src={item.imgSrc} alt={item.name} className="menu-image" />
            <p>{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CateringPage;
