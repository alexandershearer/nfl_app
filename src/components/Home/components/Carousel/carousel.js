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
                            src="https://static.www.nfl.com/image/private/t_new_photo_album_2x/f_auto/league/flsakfjldp6nk6bou2kc.jpg"
                            alt="Third slide" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block"
                            src="https://static.www.nfl.com/image/private/t_new_photo_album_2x/f_auto/league/kkax80dddbovcoqdbmnh.jpg"
                            alt="Third slide" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block"
                            src="https://static.www.nfl.com/image/private/t_new_photo_album_2x/f_auto/league/kesmqckbngt24rmhbifh.jpg"
                            alt="Third slide" />
                    </Carousel.Item>
                </Carousel>
            </div>
        )
    }

}


export default HomeCarousel