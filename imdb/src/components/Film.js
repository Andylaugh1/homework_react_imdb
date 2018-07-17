import React from 'react';

const Film = (props) => {

  return (
    <div className="film">
      <h4>{props.title}</h4>
      <p>{props.children}</p>
    </div>
  )
}

export default Film;
