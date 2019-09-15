import React from "react";

class Prefix extends React.Component {
  state = {
    // country prefix array
    prefix: ["+11", "+22", "+33"],
    // current user input
    inp: "",
    // first time inputting without casting or not
    cur_prefix: false
  };

  inputting = (e) => {
    this.setState({ 
      inp: e.target.value,
    });
  };

  selectChange = (e) => {
    let ind = e.target.value;
    let slicePrevPre = this.state.inp;
    if (this.state.inp && this.state.inp[0] === '+') {
      slicePrevPre = slicePrevPre.slice(3);
    }
    this.setState((state) => ({ 
      inp:state.prefix[ind-1] + slicePrevPre,
      cur_prefix: true
    }) );
  }

  render() {
    return (
      <div>
        <select onChange={this.selectChange}>
          <option value="1">India</option>
          <option value="2">China</option>
          <option value="3">USA</option>
        </select>
        <input onChange={this.inputting} value={this.state.inp} />
        {this.state.inp}
      </div>
    );
  }
}

export default Prefix;
