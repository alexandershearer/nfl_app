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
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block"
                            src="https://dmn-dallas-news-prod.cdn.arcpublishing.com/resizer/XshwJyvM1rwp4-AdcHz5lJq2Aoo=/1660x934/smart/filters:no_upscale()/cloudfront-us-east-1.images.arcpublishing.com/dmn/IHGJQEVVQZEY3PVZ5FNQLUGSPQ.jpg"
                            alt="Third slide" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block"
                            src="https://dmn-dallas-news-prod.cdn.arcpublishing.com/resizer/XshwJyvM1rwp4-AdcHz5lJq2Aoo=/1660x934/smart/filters:no_upscale()/cloudfront-us-east-1.images.arcpublishing.com/dmn/IHGJQEVVQZEY3PVZ5FNQLUGSPQ.jpg"
                            alt="Third slide" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block"
                            src="https://dmn-dallas-news-prod.cdn.arcpublishing.com/resizer/XshwJyvM1rwp4-AdcHz5lJq2Aoo=/1660x934/smart/filters:no_upscale()/cloudfront-us-east-1.images.arcpublishing.com/dmn/IHGJQEVVQZEY3PVZ5FNQLUGSPQ.jpg"
                            alt="Third slide" />
                    </Carousel.Item>
                </Carousel>
            </div>
        )
    }

}


export default HomeCarousel