import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Image1 from './IMAGES/1.png';
import Image2 from './IMAGES/2.png';
import Image3 from './IMAGES/3.png';

export default function Testimonial() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="testimonial-section">
      <div className="testimonial-header"></div>
      <div className="testimonial-names"></div>
      <div className="testimonial-carousel">
        <Carousel activeIndex={index} onSelect={handleSelect}>
          <Carousel.Item>
            <img src={Image1} alt="First slide" className="carousel-image" />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src={Image2} alt="Second slide" className="carousel-image" />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src={Image3} alt="Third slide" className="carousel-image" />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}
