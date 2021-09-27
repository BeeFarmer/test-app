const init_state = {
  myList: [],
  favList: []
};  

const mvlistReducer = (state = init_state, action) => {
  switch (action.type) {
    case 'INIT_DATA':
      return {
        ...state,
        myList: action.payload.mylist,
        favList: action.payload.recommendations
      };
    case 'ADD':
      return {
        ...state,
        myList: [...state.myList, action.payload],
        favList: state.favList.filter(item => item.id !== action.payload.id)
      };
    case 'REMOVE':
      return {
        ...state,
        myList: state.myList.filter(item => item.id !== action.payload.id),
        favList: [...state.favList, action.payload]
      };
    default:
      return state;
  }
}

export default mvlistReducer;