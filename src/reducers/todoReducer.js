const init_state = {
  input: "",
  list: []
};

const todoReducer = (state = init_state, action) => {
  switch (action.type) {
    case "INPUT":
      return {
        ...state,
        input: action.payload
      };
    case "ADDLIST":
      return {
        ...state,
        list: [...state.list, action.payload]
      };
    case "EMPTY":
      return {
        ...state,
        input: ""
      };
    case "REMOVE":
      return {
        ...state,
        list: state.list.filter((item, index) => index !== action.payload)
      };
    default:

  }
  return state;
};

export default todoReducer;