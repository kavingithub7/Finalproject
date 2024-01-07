import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Image1 from './IMAGES/testimonial.png';
import Image2 from './IMAGES/1.jpg';

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div className='maincontainre'>
    <Carousel activeIndex={index} onSelect={handleSelect}>
      
      <Carousel.Item>
      <img className='img' src={Image1} text="Third slide" />
        <Carousel.Caption className='textinncrs'>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
        <img  className='img' src={Image2} text="First slide" /> 
        <Carousel.Caption className='textinncrs'>
            <div className='forhead'>
            <h3 className='heading'>First slide label</h3>
          <p className='heading'>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </div>
         
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className='img' src={Image1} text="Second slide" />
        <Carousel.Caption className='textinncrs'>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        
        <img className='img' src={Image1} text="Third slide" />
        <Carousel.Caption className='textinncrs'>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
     </Carousel>
     </div>
  );
}

export default ControlledCarousel;