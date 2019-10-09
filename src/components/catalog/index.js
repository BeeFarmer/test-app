import React from 'react';
import img1 from './img/1.jpg';
import img2 from './img/2.jpg';

const img_map = {
  0: "",
  1: img1,
  2: img2
};

export default class Catalog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content_index: 0 
    };
  }

  onClickChange = (index) => {
    this.setState({ content_index: index });
  }

  render() {
    const path = "/img/2.jpg";
    //<img src={path} className='img-icon' onClick={() => this.onClickChange(2)}/>
    return (
      <div className='catalog-container'>

        <div className='select-row'>
          <img src={img_map[1]} className='img-icon' onClick={() => this.onClickChange(1)}/>
          <img src={img_map[2]} className='img-icon' onClick={() => this.onClickChange(2)}/>
        </div>
        <div className='content-area'>
          <img src={img_map[this.state.content_index]} className='img-detail' alt='' />
        </div>

      </div>
    );
  }
}