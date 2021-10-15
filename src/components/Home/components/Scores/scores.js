import React, { Component } from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './scores.css'

class Scores extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    getGameScores() {
        let gameArray = this.props.scores['events']
        return gameArray.map((game, i) => {
            const teams = game['competitions'][0]['competitors']
            const team1 = teams[0]
            const team2 = teams[1]
            console.log(this.state.score)
            return (
                <a className="liveGame" href={game.links[0].href} target="_blank">
                    <div key={i} className="sideGame">
                        <div className="teamOne">
                            <img className='teamLogo' src={team1.team.logo} alt='logo'></img>
                            <small>{game.competitions[0].competitors[0].team.name} : {game.competitions[0].competitors[0].score}</small>
                        </div>
                        <div className="gameClock">
                            <small>{game.competitions[0].status.type.shortDetail}</small>
                            {/* <p>{game.competitions[0].status.period} Quarter</p>
                        <p>{game.competitions[0].status.displayClock}</p> */}
                        </div>
                        <div className="teamTwo">
                            <small>{game.competitions[0].competitors[1].score} : {game.competitions[0].competitors[1].team.name}</small>
                            <img className='teamLogo' src={team2.team.logo} alt='logo'></img>
                        </div>
                    </div>
                </a>
            )
        })
    }


    render() {
        if (!this.props.scores) {
            return <h1>Loading...</h1>
        } else {
            return (
                <Col lg={4} className="scoreBox">
                    <h1 className="scoreHead">Games</h1>
                    {this.getGameScores()}
                </Col>
            )
        }

    }
}


export default Scores