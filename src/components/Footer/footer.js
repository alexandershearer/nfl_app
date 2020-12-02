import React, { Component } from 'react'
import { Nav } from 'react-bootstrap'
import './footer.css'

class Footer extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }


    render() {
        return (
            <div>
                <Nav
                    className="Footer"
                >
                    <p className="footerText">2020 Streamline Football</p>
                </Nav>
            </div>
        )
    }

}


export default Footer