import React from "react";
import ReactDOM from "react-dom";

import Sublist from './sublist.js';

const INIT_CONTENT = ["FRUITS", "PASTA"];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      content: INIT_CONTENT,
      sub_index: 0,
      sub_content: {
        0: ["Apple", "Orange"],
        1: ["Spaghetti", "Ravioli"],
      }
    };
  }

  onChangeInput = e => {
    const current_input = e.target.value;
    this.setState({ input: current_input });
  }

  onClickAdd = () => {
    if (this.state.input) {
      // do not add while input is null
      this.setState(state => ({
        input: "",
        content: [...state.content, state.input]
      }));
    }
  }

  onClickRemove = i => {
    const new_sub = {...this.state.sub_content};
    delete new_sub.i;
    this.setState({
      content: this.state.content.filter((item, index) => index !== i),
      sub_content: new_sub
    });
  }

  onClickAddSub = item => {
    if (item) {
      this.setState((state) => ({
        sub_content: {
          [state.sub_index]: [...state.sub_content[state.sub_index], item]
        }
      }));
    }
  }

  onClickRemoveSub = i => {
    this.setState((state) => {
      const filtered = state.sub_content[state.sub_index].filter((a, index) => i !== index);
      return {
        sub_content: {
          [state.sub_index]: filtered
        }
      }
    });
  }

  render() {
    return (
      <div className="App" style={container}>

        <div className="cat-list" style={cat}>
          <input
            style={inputBox}
            onChange={this.onChangeInput}
            value={this.state.input}
            placeholder=" Add a new category"
          />
          <button style={addBtn} onClick={this.onClickAdd}> Add </button>
          <ol>
            {this.state.content.map((item, index) => (
              <li style={liStyle} key={index}>
                {item}
                <button
                  style={removeBtn} 
                  onClick={() => this.onClickRemove(index)}> 
                  x
                </button>
              </li>
            ))}
          </ol>
        </div>

        <Sublist 
          list={this.state.sub_content[this.state.sub_index]}
          addHandler={this.onClickAddSub}
          rmHandler={this.onClickRemoveSub}
        />

      </div>
    );
  }
}

const container = {
  display: 'flex',
};

const cat = {
  margin: '15px 20px'
};

const inputBox = {
  height: '25px',
};

const addBtn = {
  display: 'inline-block',
  height: '30px',
  marginLeft: '10px',
  padding: '5px 10px',
  backgroundColor: '#4CAF50',
  border: 'none',
  color: 'white',
  textAlign: 'center',
  textDecoration: 'none',
};

const removeBtn = {
  display: 'inline-block',
  border: 'none',
  color: 'white',
  backgroundColor: 'red',
  borderRadius: '45%',
  marginLeft: '10px',
};

const liStyle = {
  marginTop: '8px'
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);




import React from "react";

class Sublist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ""
    };
  }

  onChangeInput = e => {
    this.setState({ input: e.target.value });
  }

  onClickAdd = () => {
    this.props.addHandler(this.state.input);
    this.setState({ input: "" });
  }

  render() {
    return (
      <div className='sub-list' style={sub}>
        <input
          style={inputBox}
          onChange={this.onChangeInput}
          value={this.state.input}
          placeholder=" Add a new task"
        />
        <button 
          style={addBtn} 
          onClick={this.onClickAdd}
        > 
          Submit 
        </button>
        <ol>
          { this.props.list.map((item, index) => (
            <li key={index} style={liStyle}> 
              {item} 
              <button 
                onClick={() => this.props.rmHandler(index)} 
                style={removeBtn}
              > 
                X 
              </button>
            </li>
          )) }
        </ol>
      </div>
    );
  }

}

const sub = {
  margin: '15px 20px'
};

const inputBox = {
  height: '25px',
};

const addBtn = {
  display: 'inline-block',
  height: '30px',
  marginLeft: '10px',
  padding: '5px 10px',
  backgroundColor: '#4CAF50',
  border: 'none',
  color: 'white',
  textAlign: 'center',
  textDecoration: 'none',
};

const removeBtn = {
  display: 'inline-block',
  border: 'none',
  color: 'white',
  backgroundColor: 'red',
  borderRadius: '45%',
  marginLeft: '10px',
};

const liStyle = {
  marginTop: '8px'
};

export default Sublist;