import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
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
                >
                    <Nav.Item>
                        <NavLink
                            className="navbarLink"
                            activeClassName=""
                            exact
                            to="/"
                        >
                            Home
                        </NavLink>
                    </Nav.Item>
                    <Nav.Item>
                        <NavLink
                            className="navbarLink"
                            activeClassName=""
                            exact
                            to="/records"
                        >
                            Records
                        </NavLink>
                    </Nav.Item>
                    <Nav.Item>
                        <NavLink
                            className="navbarLink"
                            activeClassName=""
                            exact
                            to="/"
                        >
                            Not Decided
                        </NavLink>
                    </Nav.Item>
                </Nav>
            </div >
        )
    }

}


export default Navbar