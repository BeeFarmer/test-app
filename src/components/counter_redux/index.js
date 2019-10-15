import React from 'react';
import { connect } from 'react-redux';
import * as myClass from '../../actions';
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
  value: state
});

const mapDispatchToProps = (dispatch) => ({
  inc: () => dispatch(myClass.incAction()),
  dec: () => dispatch(myClass.decAction()),
  oddInc: () => dispatch(myClass.oddAction()),
  asyncInc: () => dispatch(myClass.asyncAction())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Rcounter);