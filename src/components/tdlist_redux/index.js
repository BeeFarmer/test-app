import React from 'react';
import { connect } from 'react-redux';

const Rtdlist = () => {

  let input;

  return (
    <div>
      <form onSubmit={e => { console.log(input.value); e.preventDefault(); }}>
        <input ref={node => input = node} />
        <button>
          Add
        </button>
      </form>
    </div>
  );
};

export default connect()(Rtdlist);