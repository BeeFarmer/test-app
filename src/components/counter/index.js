import React from 'react';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    }
  }

  onClickInc = () => {
    this.setState((state) => ({
      count: state.count + 1
    }));
  };

  onClickDec = () => {
    this.setState((state) => ({
      count: state.count - 1
    }));
  };

  onClickIncOdd = () => {
    if (this.state.count % 2 !== 0) {
      this.setState((state) => ({
        count: state.count + 1
      }));
    }
  };

  onClickIncAsyc = () => {
    setTimeout(() => {
      this.setState((state) => ({
        count: state.count + 1
      }));
    }, 1000);
  };

  render() {
    return (
      <div>
        <p>Counter : {this.state.count}</p>
        <button onClick={this.onClickInc}> + </button>
        <button onClick={this.onClickDec}> - </button>
        <button onClick={this.onClickIncOdd}> Increment if odd </button>
        <button onClick={this.onClickIncAsyc}> Asyc Increment </button>
      </div>
    );
  }
}

export default Counter;
