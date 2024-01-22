import React from 'react'

const LoadButton = (props) => {

  const {onClick, buttontext} = props;

  return (
    <div className="button">
      <button className="button1" onClick={onClick}>
        {buttontext}
      </button>
    </div>
  )
}

export default LoadButton