import React from 'react';

const List = props => {
  return (
    <ul>
    {
      props.items.map((item, index) => (
          <li key={index}> 
            {item} &nbsp;
            <button className="remove" onClick={props.rmHandler.bind(null, item)}> 
              x
            </button>
          </li>
      ))
    }
    </ul>
  );
};

export default List;
