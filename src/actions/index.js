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

export {
  incAction,
  decAction
};