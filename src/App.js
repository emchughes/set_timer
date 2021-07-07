import "./styles.css";
import ReactDOM from "react-dom";
import Timer from "react-compound-timer";
import React from "react";
import TimeField from "react-simple-timefield";

function convertTime(time) {
  console.log(time);
  const hour = time.substring(0, 2);
  console.log(hour);
  const minute = time.substring(3, 5);
  console.log(minute);
  const second = time.substring(6, 8);
  console.log(second);
  let ms = hour * 3600000 + minute * 60000 + second * 1000;
  console.log(ms);
  return ms;
}

class CountDownTimer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: "00:00:00"
    };
    this.onTimeChange = this.onTimeChange.bind(this);
  }
  onTimeChange(event, time) {
    this.setState({ time });
  }

  render() {
    const { time } = this.state;
    return (
      <div>
        <div>
          <TimeField value={time} onChange={this.onTimeChange} showSeconds />
        </div>
        <h3>
          <Timer
            initialTime={convertTime(this.state.time)}
            direction="backward"
            startImmediately={false}
          >
            {({ start, resume, pause, stop, reset, timerState }) => (
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
