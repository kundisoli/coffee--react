import React from 'react';
import slide1 from '../../assets/buildings-1836478_1280.jpg';
import slide2 from '../../assets/cafe-1869656_1280.jpg';
import slide3 from '../../assets/coffee-5037800_1280.jpg';
import slide4 from '../../assets/girl-4181395_1280.jpg';
import { Carousel, Button } from 'antd';

const contentStyle = {
  height: '800px',
  position: 'relative',
  textAlign: 'center',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const imageStyle = {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
};

const overlayStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent black overlay
};

const textOverlayStyle = {
  position: 'absolute',
  fontFamily: "'Qwitcher Grypen', cursive",
  fontWeight: 'bold',
  top: '60%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  color: '#fff',
  textAlign: 'center',
  fontSize: '100px',
  padding: '20px',
  borderRadius: '10px',
};

const buttonStyle = {
  marginTop: '40px',
  backgroundColor: 'transparent',
  color: '#fff',
  border: '2px solid #fff',
  fontSize: '18px',
  padding: '10px 20px',
  borderRadius: '5px',
};

const CarouselHome = () => {
  return (
    <Carousel autoplay>
      <div>
        <div style={contentStyle}>
          <img src={slide1} alt="Slide 1" style={imageStyle} />
          <div style={overlayStyle}></div> {/* Semi-transparent overlay */}
          <div style={textOverlayStyle}>
            <h3>Welcome to our coffee store</h3>
            <Button style={buttonStyle}>Learn More</Button>
          </div>
        </div>
      </div>
      <div>
        <div style={contentStyle}>
          <img src={slide2} alt="Slide 2" style={imageStyle} />
          <div style={overlayStyle}></div>
          <div style={textOverlayStyle}>
            <h3>Just take a sip of our delicious coffee</h3>
            <Button style={buttonStyle}>Buy Now</Button>
          </div>
        </div>
      </div>
      <div>
        <div style={contentStyle}>
          <img src={slide3} alt="Slide 3" style={imageStyle} />
          <div style={overlayStyle}></div>
          <div style={textOverlayStyle}>
            <h3>Wide ranges of coffee</h3>
            <Button style={buttonStyle}>Explore</Button>
          </div>
        </div>
      </div>
      <div>
        <div style={contentStyle}>
          <img src={slide4} alt="Slide 4" style={imageStyle} />
          <div style={overlayStyle}></div>
          <div style={textOverlayStyle}>
            <h3>Delivery at your doorstep</h3>
            <Button style={buttonStyle}>Shop Now</Button>
          </div>
        </div>
      </div>
    </Carousel>
  );
};

export default CarouselHome;
