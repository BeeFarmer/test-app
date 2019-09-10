import React from 'react';
import List from './list';

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
        inp: "",  
        list: [...state.list, state.inp] 
      }));
    }
  };

  render() {
    return (
      <div>
        <div>
          <input 
            placeholder={'Enter Text...'}
            onChange={this.onInputChange}
            value={this.state.inp}
          />
          <button onClick={this.onClickAdd}> Add </button>
        </div>
        <List items={this.state.list} />
      </div>
    );
  }
}

export default Tdlist;
