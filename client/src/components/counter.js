import React, { Component } from 'react';
import { browserHistory } from 'react-router';

class Counter extends Component {

    constructor(props, context) {
        super();
        this.state = { time: {}, seconds: props.secs };
        this.timer = 0;
        this.startTimer = this.startTimer.bind(this);
        this.countDown = this.countDown.bind(this);
        this.withHours = props.withHours;
        this.zapTo = props.zapTo;
    }

    secondsToTime(secs){
        let hours = Math.floor(secs / (60 * 60));

        let divisor_for_minutes = secs % (60 * 60);
        let minutes = Math.floor(divisor_for_minutes / 60);

        let divisor_for_seconds = divisor_for_minutes % 60;
        let seconds = Math.ceil(divisor_for_seconds);

        let obj = {
          "h": hours,
          "m": minutes,
          "s": seconds
        };
        return obj;
    }

    componentDidMount() {
        let timeLeftVar = this.secondsToTime(this.state.seconds);
        this.setState({ time: timeLeftVar });
        this.startTimer();
    }

    startTimer() {
        if (this.timer == 0) {
            this.timer = setInterval(this.countDown, 1000);
        }
    }

    countDown() {
        // Remove one second, set state so a re-render happens.
        let seconds = this.state.seconds - 1;
        this.setState({
            time: this.secondsToTime(seconds),
            seconds: seconds,
        });
    
        // Check if we're at zero.
        if (seconds == 0) { 
            clearInterval(this.timer);
            browserHistory.push('/'+this.zapTo);
        }
    }

    render() {
        return(<div>{(this.withHours == "true") ? this.state.time.h+':':''}{this.state.time.m}:{this.state.time.s}</div>);
    }
};
export default Counter;
