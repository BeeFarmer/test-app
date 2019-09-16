import React from 'react';

export default class Row extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    const isMyList = this.props.cate === "mlist";
    const movie_list = this.props.list;

    const content_row = movie_list.map((item, index) => (
      <div className='item-detail' key={index}>
        <img src={item.img} />
        <p> {item.title} </p>
        <button className='btn' onClick={() => this.props.btnHandler(index)}>
          { isMyList ? "Remove" : "Add" }
        </button>
      </div>
    ));

    return (
      <React.Fragment>
        <p className='row-title'>{ isMyList ? "My List" : "Recommendation List" }</p>
        <div className='flex-container'>
          {content_row}
        </div>
      </React.Fragment>
    );
  }
}