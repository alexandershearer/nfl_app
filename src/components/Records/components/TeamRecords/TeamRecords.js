import React, { Component } from 'react'
import { } from 'react-bootstrap'
import './TeamRecords.css'

class TeamRecords extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    getRecords() {
        let teamArray = this.props.teams.sports[0].leagues[0].teams
        return teamArray.map((team, i) => {
            const teamColor = "#" + team.team.color + "cc"
            return (
                <div key={i} className="teamCard" style={{ backgroundColor: teamColor }}>
                    {/* <div className="cardWash" /> */}
                    <img className="teamRecordLogo" src={team.team.logos[0].href}></img>
                    <h4>{team.team.displayName}</h4>
                    <h6>{team.team.record.items[0].summary}</h6>
                </div>
            )
        })
    }


    render() {
        if (!this.props.teams) {
            return <h1>Loading...</h1>
        } else {
            return (
                <div className="teamsContainer">
                    {this.getRecords()}
                </div>
            )
        }

    }
}


export default TeamRecords