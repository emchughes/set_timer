import "./styles.css";
import ReactDOM from "react-dom";
import Timer from "react-compound-timer";
import React from "react";
import TimeField from "react-simple-timefield";

function convertTime(time) {
  console.log("convertTime time: " + time);
  const hour = time.substring(0, 2);
  const minute = time.substring(3, 5);
  const second = time.substring(6, 8);
  let ms = hour * 3600000 + minute * 60000 + second * 1000;
  console.log(ms);
  return ms;
}

class CountDownTimer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: "",
      initTime: 0
    };
    this.onTimeChange = this.onTimeChange.bind(this);
    this.doIt = this.doIt.bind(this);
  }
  onTimeChange(event, time) {
    this.setState({ time });
  }
  doIt(evt) {
    this.setState({ initTime: convertTime(this.state.time) });
  }

  render() {
    const { time, initTime } = this.state;
    console.log(time);
    console.log(initTime);
    return (
      <div>
        <h3>
          <TimeField value={time} onChange={this.onTimeChange} showSeconds />
          <button onClick={this.doIt}>Submit</button>
          <p>{this.state.time}</p>
          {!!initTime && (
            <Timer
              initialTime={initTime}
              direction="backward"
              startImmediately={false}
            >
              {({ start, resume, pause, stop, reset, setTime }) => (
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
          )}
        </h3>
      </div>
    );
  }
}

module.exports = CountDownTimer;

ReactDOM.render(<CountDownTimer />, document.getElementById("root"));
