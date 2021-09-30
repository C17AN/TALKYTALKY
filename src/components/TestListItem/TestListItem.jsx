import React from 'react'
import TestListItemButton from './TestListItemButton'

const TestListItem = ({ id, text, difficulty }) => {
  return (
    <li className="flex items-center justify-between my-4 mx-4 p-2 border border-gray-100 shadow-sm rounded-md">
      <p>{text}</p>
      <section className="flex space-x-4">
        <p className="bg-blue-100 rounded-md p-1 px-2 text-sm">{difficulty}</p>
        <TestListItemButton id={id} text="풀어보기" />
      </section>
    </li>
  )
}

export default TestListItem
