import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import './carouselCards.css'
import { FiArrowDown } from "react-icons/fi";

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const CarouselCards = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  const cards = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }, { id: 7 }, { id: 8 }, { id: 9 }, { id: 10 }, { id: 11 }, { id: 12 }]
  return (<>
    <Container>
      <Row>
        <Col md={12} >
          <div className='fiArrowDown'>
            <h3>Talvez te interessa</h3>
            <FiArrowDown />
          </div>
        </Col>
        <Col md={12}>

          <div className='test-cards-cards'>
            <div className='test10'>
              <Slider {...settings}>
                {cards.map((card) => (
                  <div  key={card.id}>
                    <div className='card-top-test'>
                      <img src='https://i.pinimg.com/474x/43/be/d4/43bed459aba43d24c1fa179a5d9d24d5.jpg' />
                    </div>
                    <div className='card-bottom'>
                      <h3>test {card.id}</h3>
                      <p>test paragraph {card.id}</p>
                    </div>
                  </div>

                ))}

              </Slider>
            </div>
          </div>
        </Col>
      </Row>
      <Row>
      </Row>
    </Container>
  </>

  );
}

export default CarouselCards