import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { Nav, Form, Button, Row } from 'react-bootstrap'
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
                    <h3 className="navTitle">Streamline Football</h3>
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
                            Team Records
                        </NavLink>
                    </Nav.Item>
                    <Nav.Item>
                        <NavLink
                            className="navbarLink"
                            activeClassName=""
                            exact
                            to="/info"
                        >
                            NFL Info
                        </NavLink>
                    </Nav.Item>
                    <Form>
                        <Row>
                            <p className="signupText">Live updates</p>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Control type="email" placeholder="Sign-up" />
                            </Form.Group>
                        </Row>
                    </Form>
                </Nav>
            </div >
        )
    }

}


export default Navbar