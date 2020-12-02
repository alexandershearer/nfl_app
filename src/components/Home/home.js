import React, { Component } from 'react'
import { Container, Col, Row, Media } from 'react-bootstrap'
import HomeCarousel from './components/Carousel/carousel'
import News from './components/News/news'
import Scores from './components/Scores/scores'
import './home.css'

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            scores: null,
            news: null,
            isLoaded: false,
            error: null,
        }
    }

    async getScores() {
        try {
            const responce = await fetch('http://site.api.espn.com/apis/site/v2/sports/football/nfl/scoreboard')
            const json = await responce.json()
            this.setState({
                scores: json,
                isLoaded: true
            })
        } catch (error) {
            this.setState({
                error,
                isLoaded: true
            })
        }
    }

    async getNews() {
        try {
            const responce = await fetch('http://site.api.espn.com/apis/site/v2/sports/football/nfl/news')
            const json = await responce.json()
            this.setState({
                news: json,
                isLoaded: true
            })
        } catch (error) {
            this.setState({
                error,
                isLoaded: true
            })
        }
    }

    componentDidMount() {
        this.getScores()
        this.getNews()
    }



    render() {
        if (this.state.error) {
            return <h1>{this.state.error}</h1>
        } else if (!this.state.isLoaded) {
            return <h1>Loading..</h1>
        } else {
            console.log(this.state.news)
            return (
                <div>
                    <HomeCarousel />

                    <Container fluid>
                        <Row>
                            <News news={this.state.news} />
                            <Col lg={4} className="scoreBox">
                                <h1 className="scoreHead">Scores</h1>
                                <Scores scores={this.state.scores} />
                            </Col>
                        </Row>
                    </Container>
                </div >
            )
        }
    }

}


export default Home