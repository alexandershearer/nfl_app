import React, { Component } from 'react'
import { Container, Jumbotron, Button, Row, Image, Col } from 'react-bootstrap'
import './articles.css'

class Articles extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }


    render() {
        return (
            <div >
                <h1 className="articleHead">NFL 2020 News</h1>
                <Image fluid className="topPic" src="https://next.ticketmaster.com/s3images/venue/photos/KovZpZAFnl1A.png" rounded />
                <Jumbotron className="articlesJumbo">
                    <h1>Super Bowl LV</h1>
                    <p className="jumboText1">
                        Super Bowl LV, the 55th Super Bowl and the 51st modern-era National Football League (NFL)
                        championship game, will decide the league champion for the 2020 NFL season. With pending developments
                        on the COVID-19 pandemic and how it affects the 2020 season, the game is scheduled to be played on
                        February 7, 2021, at Raymond James Stadium in Tampa, Florida.[2] This will be the fifth Super Bowl
                        hosted by the Tampa area and the third one held at Raymond James Stadium. The game will be televised nationally
                        by CBS. It will be the fourth time that the Super Bowl is in the same state in back-to-back years with Super Bowl
                        LIV taking place at Hard Rock Stadium in Miami Gardens, Florida.
                            </p>
                    <p>
                        <Button variant="dark" href="https://sports.nbcsports.com/2020/11/12/super-bowl-2021-date-location/">Learn more</Button>
                    </p>
                </Jumbotron>

                <Row>
                    <Col lg={7}>
                        <Jumbotron className="articlesJumbo2">
                            <h1>Raider's New Home</h1>
                            <p className="jumboText1">
                                Allegiant Stadium will seat 65,000. That much is certain. But how much this new facility will
                                mold the future of Las Vegas remains incalculable. Las Vegas was a sports town long before the
                                Raiders relocated from Oakland. A stadium like Allegiant only raises the bar.
                                “It’s the most magnificent stadium and exists in the entertainment capital of the world,”
                                said Raiders owner Mark Davis. “It is a dream. My family’s dream.”
                            </p>
                            <p>
                                <Button variant="dark" href="https://www.reviewjournal.com/sports/field-of-dreams-allegiant-stadium/">Learn more</Button>
                            </p>
                        </Jumbotron>
                    </Col>
                    <Col lg={5}>
                        <Image fluid className="articlePic2" src="https://static.onecms.io/wp-content/uploads/sites/20/2020/09/23/raiders-0-2000.jpg" rounded />

                    </Col>
                </Row>
            </div>
        )
    }

}



export default Articles