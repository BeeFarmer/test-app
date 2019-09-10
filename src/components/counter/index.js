import React from 'react';

class Counter extends React.PureComponent {
  constructor(props) {
    super(props);

    let getLocalCount = localStorage.getItem('_localCount') || 0;
    this.state = {
      count: Number(getLocalCount)
    }
  }

  // Enable localStorage to keep the value on page refresh
  // componentDidUpdate() {
  //   localStorage.setItem('localCount', this.state.count);
  //   console.log(localStorage.getItem('_localCount'));
  // }

  onClickInc = () => {
    this.setState((state) => ({ 
      count: state.count 
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
