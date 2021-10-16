import React from 'react';
import { Carousel } from 'react-bootstrap';
import mechanic1 from '../../../images/mechanic/buoyant-successful-handyman-posing-against-white-wall.jpg'
import mechanic2 from'../../../images/mechanic/repair-man-making-car-service.jpg'
import mechanic3 from '../../../images/mechanic/smiling-mechanic-with-arms-crossed-spanner.jpg'
import'./Banner.css'



const Banner = () => {
    return (
        <div>
            <h1 className='text-primary  bg-secondary py-3'>Genius_Car_Mechanics</h1>
            <div className='banner'>
            <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={mechanic1}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Hi ? this is Andrew Smith</h3>
      <p>I am a -Engine Expert-</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={mechanic2}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Hi ? this is Jhon Rony </h3>
      <p>I am a -Polish Expert-</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={mechanic3}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Hi ? this is Kurt Angel</h3>
      <p>I am a -Repair Expert-</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </div>
        </div>
    );
};

export default Banner;