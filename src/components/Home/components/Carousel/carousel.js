import React, { Component } from 'react'
import { Carousel } from 'react-bootstrap'
import './carousel.css'

class HomeCarousel extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }


    render() {
        return (
            <div>
                <Carousel className="homeCarousel">
                    <Carousel.Item>
                        <img
                            className="d-block"
                            src="https://sportshub.cbsistatic.com/i/r/2020/10/30/ba69ca45-b9de-456c-b366-63ef5cafdffc/thumbnail/1200x675/aba3c869ba736df2a7d9aeee1eb09f31/steelers-ravens-2016.jpg"
                            alt="Third slide" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block"
                            src="https://sportshub.cbsistatic.com/i/r/2020/06/20/30da748b-7522-4d6c-900c-2ec5e54ad459/thumbnail/1200x675/3bd34bfff0e89e020ab5f300bd95b279/usatsi-13617479.jpg"
                            alt="Third slide" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block"
                            src="https://images2.minutemediacdn.com/image/fetch/c_fill,g_auto,f_auto,h_2133,w_3200/https%3A%2F%2Fnflspinzone.com%2Fwp-content%2Fuploads%2Fgetty-images%2F2018%2F08%2F1197360539.jpeg"
                            alt="Third slide" />
                    </Carousel.Item>
                </Carousel>
            </div>
        )
    }

}


export default HomeCarousel