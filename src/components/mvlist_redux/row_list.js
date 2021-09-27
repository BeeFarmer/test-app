import React from 'react';

export default ({ list, onAction }) => {
  return (
    <div>
      <ul style={row_style}>
        { 
          list.map((item, index) => 
            <li key={index}>
              <img src={item.img} onClick={() => onAction(item)} className='item-detail' />
              <div> { item.title } </div>
            </li>
          ) 
        }
      </ul>
    </div>
  );

}

const row_style = {
  display: 'flex',
  listStyleType: 'none',
  justifyContent: 'space-around',
  width: '50%',
};