import React from 'react';
import { connect } from 'react-redux';
import { incAction, decAction } from '../../actions';

const Rcounter = ({ value }) => {

  return (
    <div>
      <p>Counter : {value}</p>
      <button> + </button>
      <button> - </button>
      <button> Increment if odd </button>
      <button> Asyc Increment </button>
    </div>
  );
}

const mapStateToProps = (state) => ({
  value: state.value
});

const mapDispatchToProps = (dispatch) => ({
  inc: () => dispatch(incAction()),
  dec: () => dispatch(decAction())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Rcounter);