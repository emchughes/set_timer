import "./styles.css";
import ReactDOM from "react-dom";
// import Timer from "react-compound-timer";
import React from "react";
import TimeField from "react-simple-timefield";
// import Math from "math"

const ms = require("pretty-ms");

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: "10000000",
      // seconds: 5,
      start:  10000000,
      isOn: false
    };
    this.startTimer = this.startTimer.bind(this);
    this.stopTimer = this.stopTimer.bind(this);
    this.resetTimer = this.resetTimer.bind(this);
    this.onTimeChange = this.onTimeChange.bind(this);
    this.convertTime = this.convertTime.bind(this);
    // this.countDown = this.countDown.bind(this)
  }
  startTimer() {
    this.setState({
      time: this.state.time,
      start: 10000000,
      isOn: true
    });
    console.log(ms(this.state.start));
    this.timer = setInterval(
      () =>
        this.setState({
          time: this.state.time - 1000
        }),
      1000
    );
    console.log("start");
  }
  stopTimer() {
    console.log(ms(this.state.start));
    this.setState({
      isOn: false
    });
    clearInterval(this.timer);
    console.log("stop");
  }
  resetTimer() {
    console.log(`this.state.start ${this.state.start}`);
    this.setState({ time: this.state.start });
    console.log("reset");
  }
  onTimeChange(event, time) {
    this.setState({ time });
  }
  convertTime(time) {
    let stringTime = ""
    //time is in miliseconds
    console.log(time)
    let miliseconds = time
    //time = 10,000,000
    let seconds = Math.floor((miliseconds/1000) - Math.floor(miliseconds/60000) * 60)
    //sec = 10,000
    let minutes = Math.floor((miliseconds/60000) - Math.floor(miliseconds/3600000) * 60)
    //minute = 166.67
    let hours = Math.floor((miliseconds/3600000) - Math.floor(miliseconds/854000000) * 24)
    // hours = 2.78
    let days = Math.floor((miliseconds/854000000) - Math.floor(miliseconds/31540000000) * 365)
    // 0 days
    let years = Math.floor(miliseconds/31540000000)
    stringTime = (years > 0 ? years + ":" : null) + 
                  (days > 0 ? days + ":": null) + 
                  (hours > 0 ? hours + ":" : null) +
                  (minutes > 0 ? minutes + ":" : null)+
                  seconds
    return (stringTime)
  }

  // secondsToTime(secs){
  //   console.log(secs)
  //   let hours = Math.floor(secs / (60 * 60));

  //   let divisor_for_minutes = secs % (60 * 60);
  //   let minutes = Math.floor(divisor_for_minutes / 60);

  //   let divisor_for_seconds = divisor_for_minutes % 60;
  //   let seconds = Math.ceil(divisor_for_seconds);

  //   let obj = {
  //     "h": hours,
  //     "m": minutes,
  //     "s": seconds
  //   };
  //   return obj;
  // }

  // componentDidMount() {
  //   console.log("component did mount")
  //   let timeLeftVar = this.secondsToTime(this.state.seconds);
  //   this.setState({ time: timeLeftVar });
  // }

  // countDown() {
  //   // Remove one second, set state so a re-render happens.
  //   let seconds = this.state.seconds - 1;
  //   this.setState({
  //     time: this.secondsToTime(seconds),
  //     seconds: seconds,
  //   });

  //   // Check if we're at zero.
  //   if (seconds === 0) {
  //     clearInterval(this.timer);
  //   }
  // }

  render() {
    const { time } = this.state
    let start =
      this.state.time !== 0 ? (
        <button onClick={this.startTimer}>start</button>
      ) : null;
    let stop = this.state.isOn ? (
      <button onClick={this.stopTimer}>stop</button>
    ) : null;
    let reset =
      this.state.time !== 0 && !this.state.isOn ? (
        <button onClick={this.resetTimer}>reset</button>
      ) : null;
    let resume =
      this.state.time !== 0 && !this.state.isOn ? (
        <button onClick={this.startTimer}>resume</button>
      ) : null;
    return (
      <div>
        <div>
          <TimeField value={time} onChange={this.onTimeChange} showSeconds />
          <h3>timer: {this.convertTime(time)}</h3>
        </div>
        {start}
        {resume}
        {stop}
        {reset}
      </div>
    );
  }
}

module.exports = Timer;

ReactDOM.render(<Timer />, document.getElementById("root"));
