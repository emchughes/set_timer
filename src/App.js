import "./styles.css" 
import ReactDOM from "react-dom" 
import React from "react" 


const ms = require("pretty-ms") 

class Timer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      time: 0,
      start: 0
    }
  }
  

  render() {
    return (
      <div>
        <h3>Set Timer Countdown</h3>
            
      </div>
    ) 
  }
}

module.exports = Timer 

ReactDOM.render(<Timer />, document.getElementById("root")) 
