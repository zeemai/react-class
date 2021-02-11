import { Component } from "react";

class Timer extends Component {
  state = {
    seconds: 0,
  };
  interval = {};
  tick = () => {
    this.setState({
      seconds: this.state.seconds + 1,
    });
  };
  componentDidMount = () => {
    this.interval = setInterval(() => this.tick(), 1000);
  };

  componentWillUnmount = () => {
    clearInterval(this.interval);
  };

  render() {
    return <div>Seconds: {this.state.seconds}</div>;
  }
}

export default Timer;
