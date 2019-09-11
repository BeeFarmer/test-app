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

  removeItem = (index) => {
    this.setState((state) => (
      // { list: state.list.filter(el => el !== item) }
      { list: state.list.slice(0, index).concat(state.list.slice(index+1)) }
    ));
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
        <List items={this.state.list} rmHandler={this.removeItem} />
      </div>
    );
  }
}

export default Tdlist;
