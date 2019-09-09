import React from 'react';

class Tdlist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inp: "",
      list: []
    };
  }

  onInputChange = (e) => {
    this.setState({ inp: e.target.value });
  };

  onClickAdd = () => {
    if (this.state.inp) {
      this.setState((state) => ({  
        list: [...state.list, state.inp] 
      }));
    }
  };

  render() {
    return (
      <div>
        <div>
          <input type="text" placeholder={'Enter Text...'} onChange={this.onInputChange} />
          <button onClick={this.onClickAdd}> Add </button>
        </div>
        <ul>
          { this.state.list.map((item, index) => <li key={index}>{item}</li>) }
        </ul>
      </div>
    );
  }
}

export default Tdlist;
