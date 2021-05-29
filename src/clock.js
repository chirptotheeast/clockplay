import React, { Component } from 'react'
import './clock.css'

export default class clock extends Component {
    constructor(props){
        super(props)
        this.state={
            time: new Date().toLocaleString()
        }
    }

    componentDidMount(){
        this.intervalID = setInterval(() =>
            this.updateClock(),
            1000
        )
    }

    componentWillUnmount(){
        clearInterval(this.intervalID)
    }

    updateClock(){
        this.setState({
            time: new Date().toLocaleTimeString()
        })
    }
    render() {
        return (
            <div className="Time">
                <p>{this.state.time}</p>
            </div>
        )
    }
}
