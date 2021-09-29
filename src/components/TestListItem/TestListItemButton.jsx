import React from 'react'
import { Link } from 'react-router-dom'

const TestListItemButton = ({ text, onClick }) => {
  return (
    <Link to="/tests/191293">
      <button onClick={onClick} className="p-1 px-3 bg-indigo-50 rounded-md text-sm">
        {text}
      </button>
    </Link>
  )
}

export default TestListItemButton
