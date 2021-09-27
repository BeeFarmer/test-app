import axios from 'axios';

const INIT_PATH = '/mvlist_data.json';

const _init_data = (response) => {
  return {
    type: 'INIT_DATA',
    payload: response
  };
}

const init_fetch = () => {
  return dispatch => {
    axios.get(INIT_PATH)
         .then(res => dispatch( _init_data(res.data) ))
         .catch(err => console.log(`ERROR: ${err}`));
  }
}

const addAction = (item) => {
  return {
    type: 'ADD',
    payload: item
  };
}

const removeAction = (item) => {
  return {
    type: 'REMOVE',
    payload: item
  };
}

export {
  init_fetch,
  addAction,
  removeAction
};