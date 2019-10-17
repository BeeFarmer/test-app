const getInputAction = (inp) => {
  return {
    type: "INPUT",
    payload: inp
  };
};

const addToListAction = (item) => {
  return {
    type: "ADDLIST",
    payload: item
  };
};

const emptyInputAction = () => {
  return {
    type: "EMPTY"
  };
};

const removeFromListAction = (index) => {
  return {
    type: "REMOVE",
    payload: index
  };
};

export { 
  getInputAction,
  addToListAction,
  emptyInputAction,
  removeFromListAction
};