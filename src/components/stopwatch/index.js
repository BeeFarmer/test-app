import React from 'react';

class Stopwatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      minute: 0,
      second: 0,
      intervalId: ""
    }
  }

  onClickReset = () => {
    clearInterval(this.state.intervalId);
    this.setState({
      minute: 0,
      second: 0,
      intervalId: ""
    });
  };

  update = () => {
    let update_sec = this.state.second;
    let update_min= this.state.minute ;
    if (this.state.second >= 9) {
      update_sec = 0;
      ++update_min;
    } else {
      ++update_sec;
    }

    this.setState({
      minute: update_min,
      second: update_sec
    });
  }

  onClickInc = () => {
    if (!this.state.intervalId) {
      const tempId = setInterval(this.update, 1000);
      this.setState({ intervalId: tempId });
    }
  }

  onClickStop = () => {
    clearInterval(this.state.intervalId);
    this.setState({
      intervalId: ""
    });
  };

  func = () => {
    console.log(this);
  }

  render() {
    return (
      <div>
        <h1>Stop Watch</h1>
        <div>
          {this.state.minute}m  {this.state.second}s
        </div>
        <div>
          <button onClick={this.onClickReset}>Reset</button>
          <button onClick={this.onClickInc}>Start</button>
          <button onClick={this.onClickStop}>Stop</button>
          <button onClick={this.func}>FUNC</button>
        </div>
      </div>
    );
  }
}

export default Stopwatch;