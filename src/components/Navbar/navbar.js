import React, { Component } from 'react'
import { Nav } from 'react-bootstrap'
import './navbar.css'

class Navbar extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }


    render() {
        return (
            <div>
                <Nav
                    className="Navbar"
                    activeKey="/home"
                    onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
                >
                    <Nav.Item>
                        <Nav.Link href="/home">Home</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-1">News</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-2">Not Decided</Nav.Link>
                    </Nav.Item>
                </Nav>
            </div>
        )
    }

}


export default Navbar