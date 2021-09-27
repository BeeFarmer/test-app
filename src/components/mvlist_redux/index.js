import React from 'react';
import Row from './row_list.js';
import { connect } from 'react-redux';
import * as mvlistAction from '../../actions/mvlist/';

class Rmvlist extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.init_data();
  }

  render() {
    const { myList, favList, removeHandler, addHandler } = this.props;

    return (
      <div>
        
        <Row list={myList} onAction={removeHandler}/>

        <Row list={favList} onAction={addHandler}/>

      </div>
    );
  }

}

const mapStateToProps = (state) => {
  return {
    myList: state.mvlistReducer.myList,
    favList: state.mvlistReducer.favList
  }
}

const mapDispatchToProps = (dispatch) => ({
  init_data: () => dispatch(mvlistAction.init_fetch()),
  removeHandler: item => dispatch(mvlistAction.removeAction(item)),
  addHandler: item => dispatch(mvlistAction.addAction(item))
})


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Rmvlist);