import React, { Component } from 'react'
import { } from 'react-bootstrap'
import Articles from './components/Articles/articles'
import './info.css'

class Info extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <div>
                <Articles />
            </div >
        )
    }
}


export default Info