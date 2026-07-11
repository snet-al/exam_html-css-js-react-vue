import React from 'react'

function Button({ onClick, disabled, children }) {
  return (
    <button onClick={onClick} disabled={disabled}>
      {children}
    </button>
    //button component to be implemented children is text
  )
}

export default Button