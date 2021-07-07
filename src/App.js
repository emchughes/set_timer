import "./styles.css";
import ReactDOM from "react-dom";
import Timer from "react-compound-timer";
import React from "react";
import TimeField from "react-simple-timefield";

function convertTime(time) {
  const hour = time.substring(0, 2);
  const minute = time.substring(3, 5);
  const second = time.substring(6, 8);
  let ms = hour * 3600000 + minute * 60000 + second * 1000;
  return ms;
}

class CountDownTimer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: "12:00:00"
    }
    this.onTimeChange = this.onTimeChange.bind(this)
  }
  onTimeChange(event, time) {
    console.log(time)
    this.setState({ time })
    console.log(time)
    }
    
  render() {
    const { time } = this.state
    return (
      <div>
        <div>
          <TimeField value={time} onChange={this.onTimeChange} showSeconds />
        </div>
        <p>{time}</p>
        <h3>
          <Timer
            initialTime={convertTime(time)}
            direction="backward"
            startImmediately={false}
          >
            {({ start, resume, pause, stop, reset, set }) => (
              <React.Fragment>
                <div>
                  <Timer.Hours /> h <Timer.Minutes /> m <Timer.Seconds /> s
                    <button onClick{() => console}>Enter</button>
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
