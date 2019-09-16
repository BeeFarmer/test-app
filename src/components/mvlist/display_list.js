import React from 'react';

function Display(props) {
  return (
    <ul>
      { props.mlist.map((item, index) => <li key={index}> {item.title} </li>) }
    </ul>
  );
}

export default Display;
