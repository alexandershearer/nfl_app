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
                            src="https://imageproxy.themaven.net//https%3A%2F%2Fwww.si.com%2F.image%2FMTY4MTM4MjU2MDMyOTk4Nzg0%2Frussell-wilson-stephon-gilmore-christian-mccaffrey-nick-bosa-nfl-midseason-predictions.jpg"
                            alt="Third slide" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block"
                            src="https://operations.nfl.com/media/4078/no-sf.jpg?mode=max&width=995"
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