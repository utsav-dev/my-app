import React from "react";
// import My from "./My";
// const App = () => {
// import React, {Component} from "react";

class My extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date(),
      counter: 0,
    };

this.timerGame = this.timerGame.bind(this)
  }

  ticker() {
    this.setState({
      time: new Date(),
    });
  }

 timerGame(){ this.setState({counter: this.state.counter+1});
  }
  changeColor = () => {
    this.setState({counter: "blue"});
  }

  componentDidMount() {
    console.log("hye");

    this.timer = setInterval(() => this.ticker(), 1000);
    this.timer = setInterval(() => this.timerGame(), 1000);
    
  }

  componentWillUnmount() {
    console.log("bye");
    clearInterval(this.timer);
  }

  render() {
    return (
      <div className="Clock">
        <h3 id="time">{this.state.time.toLocaleTimeString()}</h3>
        {/* <button
          onClick={() =>
            this.setState({
              counter: this.state.counter + 1,
            })
          }
        >
          Timer Start/Stop{" "}
        </button> */}
        <button onClick = {this.timerGame}>

        </button>
        <h1>{this.state.counter}</h1>
      </div>
    );
  }
}

export default My;
