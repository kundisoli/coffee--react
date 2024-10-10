import React from 'react';
import slide1 from '../../assets/pexels-bluerhinomedia-2788792.jpg';
import slide2 from '../../assets/pexels-ekrulila-11364193.jpg';
import slide3 from '../../assets/pexels-fotios-photos-1855214.jpg';
import slide4 from '../../assets/pexels-wildlittlethingsphoto-887723.jpg';
import 'antd/dist/reset.css';

import { Carousel, Button } from 'antd';

const contentStyle = {
  height: '800px',
  textAlign: 'center',
  background: '#364d79',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
};

const imageStyle = {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
};

const CarouselHome = () => {
  return (
    <Carousel autoplay>
      <div>
        <div style={contentStyle}>
          <img src={slide1} alt="Slide 1" style={imageStyle} />
          <h3>Welcome to our coffee store</h3>
          <Button type="primary" style={{ marginTop: '20px' }}>Learn More</Button>
        </div>
      </div>
      <div>
        <div style={contentStyle}>
          <img src={slide2} alt="Slide 2" style={imageStyle} />
          <h3>Just take a sip of our delicious coffee</h3>
          <Button type="primary" style={{ marginTop: '20px' }}>Buy Now</Button>
        </div>
      </div>
      <div>
        <div style={contentStyle}>
          <img src={slide3} alt="Slide 3" style={imageStyle} />
          <h3>Wide ranges of coffee</h3>
          <Button type="primary" style={{ marginTop: '20px' }}>Explore</Button>
        </div>
      </div>
      <div>
        <div style={contentStyle}>
          <img src={slide4} alt="Slide 4" style={imageStyle} />
          <h3>Delivery at your doorstep</h3>
          <Button type="primary" style={{ marginTop: '20px' }}>Shop Now</Button>
        </div>
      </div>
    </Carousel>
  );
};

export default CarouselHome;
