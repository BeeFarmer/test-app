const incAction = () => {
  return {
    type: 'INCREMENT'
  };
};

const decAction = () => {
  return {
    type: 'DECREMENT'
  };
};

const oddAction = () => {
  return (dispatch, getState) => {
    const value = getState();
    if (value % 2 !== 0) {
      dispatch(incAction());
    }
  }
}

const asyncAction = () => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(incAction())
    }, 1000);
  }
}


export {
  incAction,
  decAction,
  oddAction,
  asyncAction
};