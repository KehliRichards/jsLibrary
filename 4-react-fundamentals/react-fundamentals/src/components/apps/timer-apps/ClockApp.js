import React, { Component } from 'react';

export default class ClockApp extends Component {

    constructor(props) {
        super(props);
        var date = this.getTimeString();
        var date1 = this.getTimeString1();
        this.state = {
            time: date,
            time1: date1
        }
    }

    getTimeString() {
        const date = new Date(Date.now()).toLocaleTimeString();
        return date;
    }

    getTimeString1() {
        const date1 = new Date(Date.now()).toLocaleTimeString('en-US', { timeZone: 'America/Denver' });
        return date1;
    }

    componentDidMount() {
        const _this = this;
        this.timer = setInterval(function() {
            var date = _this.getTimeString();
            var date1 = _this.getTimeString1();
            _this.setState({
                time:date,
                time1: date1
            })
        }, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    render() {
        return(
            <div>
                <h1 className="section-title">React Clock</h1>
                <hr className="explanation" />
                <h4>{this.state.time}</h4>
                <p>Indianapolis, IN</p>
                <hr className="explanation" />
                <h4>{this.state.time1}</h4>
                <p>Denver, Colorado</p>
            </div>
        )
    }
}