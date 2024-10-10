import React from 'react';
import './Gallery.css';

// Example image imports (replace with your actual image paths)
import img1 from '../../assets/pexels-pixabay-162766.jpg';
import img2 from '../../assets/bakery-1868925_1280.jpg';
import img3 from '../../assets/bread-5470532_1280.jpg';
import img4 from '../../assets/food-5158702_1280.jpg';
import img5 from '../../assets/pexels-jonas-mohamadi-3049426.jpg';
import img6 from '../../assets/pexels-pixabay-460541.jpg';

const images = [
  { id: 1, src: img1, alt: 'Image 1' },
  { id: 2, src: img2, alt: 'Image 2' },
  { id: 3, src: img3, alt: 'Image 3' },
  { id: 4, src: img4, alt: 'Image 4' },
  { id: 5, src: img5, alt: 'Image 5' },
  { id: 6, src: img6, alt: 'Image 6' },

];

const Gallery = () => {
  return (
    <div className="gallery-container">
      <h1>Gallery</h1>
      <div className="gallery-grid">
        {images.map(image => (
          <div key={image.id} className="gallery-item">
            <img src={image.src} alt={image.alt} className="gallery-image" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
