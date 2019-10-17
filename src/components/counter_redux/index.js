import React from 'react';
import { connect } from 'react-redux';
import * as counterAction from '../../actions/counter/';
//{ incAction, decAction, oddAction, asyncAction }

const Rcounter = ({ value, inc, dec, oddInc, asyncInc }) => {

  return (
    <div>
      <p>Counter : {value}</p>
      <button onClick={inc}> + </button>
      <button onClick={dec}> - </button>
      <button onClick={oddInc}> Increment if odd </button>
      <button onClick={asyncInc}> Asyc Increment </button>
    </div>
  );
}

const mapStateToProps = (state) => ({
  value: state.counterReducer
});

const mapDispatchToProps = (dispatch) => ({
  inc: () => dispatch(counterAction.incAction()),
  dec: () => dispatch(counterAction.decAction()),
  oddInc: () => dispatch(counterAction.oddAction()),
  asyncInc: () => dispatch(counterAction.asyncAction())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Rcounter);