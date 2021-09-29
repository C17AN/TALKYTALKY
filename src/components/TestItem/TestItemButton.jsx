import React from 'react'
import { Link } from 'react-router-dom'

const TestItemButton = ({ text, onClick }) => {
  return (
    <Link to="/id">
      <button onClick={onClick} className="p-1 px-3 bg-indigo-50 rounded-md text-sm">
        {text}
      </button>
    </Link>
  )
}

export default TestItemButton
