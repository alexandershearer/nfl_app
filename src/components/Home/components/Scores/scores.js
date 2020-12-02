import React, { Component } from 'react'
import { Row } from 'react-bootstrap'
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
            return (
                <div key={i}>
                    <Row className="sideGame">
                        <div className="teamOne">
                            <img className='teamLogo' src={team1.team.logo} alt='logo'></img>
                            <p>{game.competitions[0].competitors[0].team.name} : {game.competitions[0].competitors[0].score}</p>
                        </div>
                        <div className="teamTwo">
                            <p>{game.competitions[0].competitors[1].score} : {game.competitions[0].competitors[1].team.name}</p>
                            <img className='teamLogo' src={team2.team.logo} alt='logo'></img>
                        </div>
                    </Row>
                </div>
            )
        })
    }


    render() {
        if (!this.props.scores) {
            return <h1>Loading...</h1>
        } else {
            return (
                <div>
                    {this.getGameScores()}
                </div>
            )
        }

    }
}


export default Scores