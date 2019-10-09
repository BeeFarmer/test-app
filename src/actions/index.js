const incAction = () => {
  return {
    type: 'INCREMENT'
  };
}

const decAction = () => {
  return {
    type: 'DECREMENT'
  };
}

export default {
  incAction,
  decAction
};