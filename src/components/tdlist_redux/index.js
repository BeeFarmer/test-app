import React from 'react';
import { connect } from 'react-redux';
import * as todoAction from '../../actions/tdlist/';

const Rtdlist = ({ input, list, getInput, emptyInput, addToList, removeFromList }) => {

  const handleSubmit = (e) => {
    addToList(input);
    emptyInput();
    e.preventDefault();
  };

  const func = () => {console.log(123);};

  return (
    <div>
      <form onSubmit={ e => handleSubmit(e) }>
        <input onChange={e => getInput(e.target.value)} value={input} />
        <button>
          Add
        </button>
      </form>
      <ul>
        { list.map((item, index) => 
            <li key={index}> 
              {item} <button onClick={() => removeFromList(index)}> X </button>
            </li>
          )
        }
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => ({
  input: state.todoReducer.input,
  list: state.todoReducer.list
});

const mapDispatchToProps = (dispatch) => ({
  getInput: (input) => dispatch(todoAction.getInputAction(input)),
  emptyInput: () => dispatch(todoAction.emptyInputAction()),
  addToList: (item) => dispatch(todoAction.addToListAction(item)),
  removeFromList: (index) => dispatch(todoAction.removeFromListAction(index))
});

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(Rtdlist);