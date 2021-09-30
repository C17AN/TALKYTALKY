import React from 'react'
import { Link } from 'react-router-dom'

const TestListItemButton = ({ text, onClick, id }) => {
  return (
    <Link to={`/tests/${id}`}>
      <button onClick={onClick} className="p-1 px-3 bg-indigo-50 rounded-md text-sm">
        {text}
      </button>
    </Link>
  )
}

export default TestListItemButton
