import React from 'react';
import Display from './display_list';
import Row from './row_list';

import movieList from './data';

class Mvlist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mlist: movieList.mylist,
      rlist: movieList.recommendations
    };
  }

  onClickRemove = (index) => {
    const mlist_copy = [...this.state.mlist];
    const remove_item = mlist_copy.splice(index, 1)[0];
    const rlist_copy = [remove_item, ...this.state.rlist];

    this.setState({
      mlist: mlist_copy,
      rlist: rlist_copy
    });
  };

  onClickAdd = (index) => {
    const rlist_copy = [...this.state.rlist];
    const add_item = rlist_copy.splice(index, 1)[0];
    const mlist_copy = [add_item, ...this.state.mlist];

    this.setState({
      mlist: mlist_copy,
      rlist: rlist_copy
    });
  };

  render() {
    return (
      <div>
        
        <Row cate='mlist' list={this.state.mlist} btnHandler={this.onClickRemove} />

        <Row cate='rlist' list={this.state.rlist} btnHandler={this.onClickAdd} />
        
        <Display mlist={this.state.mlist} />

      </div>
    );
  }
}

export default Mvlist;
