import React from 'react'

const BaseButton = ({ onClick, text }) => {
  return (
    <button onClick={onClick} className="px-3 py-1 bg-blue-200 rounded-md text-sm">
      {text}
    </button>
  )
}

export default BaseButton
