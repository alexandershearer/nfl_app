import React, { Component } from 'react'
import { Media, Col } from 'react-bootstrap'
import './news.css'

class News extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }


    getNews() {
        const default_url = "https://kubrick.htvapps.com/htv-prod-media.s3.amazonaws.com/images/2669-national-football-league-primary-dark-2008-1588775048.png?crop=1.00xw:0.872xh;0,0.0653xh&resize=900:*"
        const recentNews = this.props.news.articles
        return recentNews.map((news, i) => {
            console.log(news.images.length)
            const photo_url = news.images.length > 0 ? news.images[0].url : default_url
            return (
                <div key={i} >
                    <Media className="newsMedia">
                        <img
                            width={248}
                            height={156}
                            className="align-self-center mr-3"
                            src={photo_url}
                            alt="Generic placeholder"
                        />
                        <Media.Body>
                            <h5>{news.headline}</h5>
                            <p>{news.description}</p>
                        </Media.Body>
                    </Media>
                </div>
            )
        })

    }

    render() {
        if (!this.props.news) {
            return <h1>Loading...</h1>
        } else {
            return (
                <Col lg={8}>
                    <h1>News</h1>
                    {this.getNews()}
                </Col>
            )
        }

    }
}

export default News