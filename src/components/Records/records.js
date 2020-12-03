import React, { Component } from 'react'
import { } from 'react-bootstrap'
import TeamRecords from './components/TeamRecords/TeamRecords'
import './records.css'

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            teams: null,
            isLoaded: false,
            error: null,
        }
    }

    async getTeams() {
        try {
            const response = await fetch('http://site.api.espn.com/apis/site/v2/sports/football/nfl/teams')
            const json = await response.json()
            this.setState({
                teams: json,
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
        this.getTeams()
    }



    render() {
        if (this.state.error) {
            return <h1>{this.state.error}</h1>
        } else if (!this.state.isLoaded) {
            return <h1>Loading..</h1>
        } else {
            console.log(this.state.teams)
            return (
                <div>
                    <h1 className="recordTitle">Team Records</h1>
                    <TeamRecords teams={this.state.teams} />
                </div >
            )
        }
    }

}


export default Home