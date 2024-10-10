import React from 'react'
import CarouselHome from './Carousel'
import './Homepage.css'
import image1 from '../../assets/pexels-olly-3756050.jpg'
import image2 from '../../assets/pexels-fotios-photos-1855214.jpg'
import product1 from '../../assets/pexels-sedcreatives-14537240.jpg'
import product2 from '../../assets/pexels-cottonbro-4829069.jpg'
import product3 from '../../assets/pexels-matvalina-20285565.jpg'
import aboutimg from '../../assets/people-3242369_1280.jpg'


const Homepage = () => {
  return (
    <div>
    <CarouselHome /> 

      <div className="menu-section">
      <h2 className="menu-title">View Menus:</h2>
      <nav className="menu-links">
        <a href="#food" className="menu-item">FOOD</a>
        <span className="separator">•</span>
        <a href="#beverages" className="menu-item">BEVERAGES</a>
        <span className="separator">•</span>
        <a href="#beignets" className="menu-item">BEIGNETS</a>
        <span className="separator">•</span>
        <a href="#catering" className="menu-item">CATERING</a>
        
      </nav>
      <div className="bakery-section">
      <div className="images-container">
        <img src={image1} alt="Bakery Item 1" className="bakery-image" />
        <img src={image2} alt="Bakery Item 2" className="bakery-image" />
      </div>
      <div className="info-container">
        <h2>Welcome to Brew Crafters</h2>
        <p>
          At Brew Crafters, we believe that every bite should be a delightful experience.
          Our bakery offers a range of freshly baked goods made with the finest ingredients.
          From artisan breads to delicious pastries, we have something for everyone.
                  Visit us for a taste of our signature treats and a cozy atmosphere. We are committed 
          to creating delicious moments for you and your loved ones.
        </p>
      </div>
    </div>
    <section class="product-section">
    <h2 class="section-title">New Release</h2>
    <a href="#" class="view-more-button">View More</a>
    <div class="product-container">
        <div class="product-item">
        <img src={product1} alt="Slide 1" className="product-image" />
            <p class="product-name">Turk</p>
        </div>
        <div class="product-item">
        <img src={product2} alt="Slide 1" className="product-image" />
            <p class="product-name">Sibarista</p>
        </div>
        <div class="product-item">
        <img src={product3} alt="Slide 1" className="product-image" />
            <p class="product-name">Baritsa</p>
        </div>
    </div>

</section>

<div class="about">
    <h3 class="about-title">We Produce a Variety of Coffee Products</h3>
    <p class="about-description">
        Our Bakery offers a range of freshly baked goods made with the finest ingredients. 
        Brew Crafters takes pride in producing and providing choices to our customers. 
        Just take a sip of our delicious coffee and savor our signature treats.
    </p>
</div>

      <div className="action-section">
      <a href="#find-location" className="action-button">FIND A LOCATION</a>
      <a href="#view-menu" className="action-button">VIEW MENU</a>
      <a href="#order-online" className="action-button">ORDER ONLINE</a>
    </div>
    </div>
    <div class="coffee-tasting">
    <div class="tasting-image">
        <img src={aboutimg} alt="Coffee Tasting" />
    </div>
    <div class="tasting-content">
        <h3 class="tasting-title">Our Popular Coffee Tasting/Cupping Sessions</h3>
        <p class="tasting-description">
            Experience the art of coffee cupping, where you'll explore the rich tastes and aromas of brewed coffee. 
            While it's a professional practice, anyone can join in the fun! At Brothers Coffee, we offer an engaging 
            tour of our roastery, followed by an educational coffee cupping session that will transform your understanding 
            of coffee. You'll leave with valuable insights that will make you feel like a seasoned coffee connoisseur.
        </p>
        <p class="tasting-call-to-action">
            Ready to challenge your taste buds? Contact us for inquiries about booking a cupping session at the Roastery!
        </p>
    </div>
</div>


    </div>
  )
}

export default Homepage
