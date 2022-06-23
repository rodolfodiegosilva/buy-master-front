import React from 'react'
import './popularDestinations.css'
import Slider from "react-slick";
import './carouselCards.css'


import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { AiOutlineArrowRight } from "react-icons/ai";

const PopularDestinations = () => {

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 6,
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
    const cards = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }, { id: 6 }, { id: 6 }, { id: 6 }, { id: 6 }, { id: 6 }, { id: 7 }]
    return (
        <>
            <Container className='popular-destination-comp'>
                <Row>
                    <Col sm={2}>
                        <div className='popular-categories'>
                            <span>Produtos populares</span>
                            <AiOutlineArrowRight />
                        </div>
                    </Col>
                    <Col sm={10}>
                        <div>
                            <Slider {...settings}>
                                {cards.map((card) => (
                                    <div key={card.id} className='popular-option'>
                                        <img src='https://cf.shopee.com.br/file/9ff8e11ebe3c511679e5706cc5616b25' />
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default PopularDestinations