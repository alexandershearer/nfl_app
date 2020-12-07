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
                            width={270}
                            height={170}
                            className="align-self-center mr-3 newsPicture"
                            src={photo_url}
                            alt="Generic placeholder"
                        />
                        <Media.Body>
                            <h5 className="newsTitle">{news.headline}</h5>
                            <p className="newsText">{news.description}</p>
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
                <Col lg={8} className="newsCol">
                    <h1 className="newsHeader">Recent News</h1>
                    {this.getNews()}
                </Col>
            )
        }

    }
}

export default News