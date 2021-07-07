import "./styles.css";
import ReactDOM from "react-dom";
import Timer from "react-compound-timer";
import React from "react";
import TimeField from "react-simple-timefield";

let setTime = "00:00:00"

class CountDownTimer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: "12:00:00",
    }
    this.onTimeChange = this.onTimeChange.bind(this)
  }
  onTimeChange(event, time) {
    console.log("setTime before: " + setTime)
    console.log("time before: " + time)
    this.setState({ time, setTime})
    setTime = time
    console.log("setTime after: " + setTime)
  }
  convertTime(setTime) {
    console.log("convertTime: " + setTime)
    const hour = this.state.time.substring(0, 2);
    const minute = this.state.time.substring(3, 5);
    const second = this.state.time.substring(6, 8);
    let ms = hour * 3600000 + minute * 60000 + second * 1000;
    return ms;
  }

  render() {
    const { time } = this.state
    const { setTime } = this.state
    return (
      <div>
        <h3>
          <TimeField value={time} onChange={this.onTimeChange} showSeconds />
          <Timer
            initialTime={this.convertTime(setTime)}
            direction="backward"
            startImmediately={false}
            >
            
            {({ start, resume, pause, stop, reset }) => (
              <React.Fragment>
                <div>
                  <Timer.Hours /> h <Timer.Minutes /> m <Timer.Seconds /> s
                </div>
                <br />
                <div>
                  <button onClick={start}>Start</button>
                  <button onClick={pause}>Pause</button>
                  <button onClick={resume}>Resume</button>
                  <button onClick={stop}>Stop</button>
                  <button onClick={reset}>Reset</button>
                </div>
              </React.Fragment>
            )}
          </Timer>
        </h3>
      </div>
    );
  }
}

module.exports = CountDownTimer;

ReactDOM.render(<CountDownTimer />, document.getElementById("root"));
