import React from 'react'
import TestListItemButton from './TestListItemButton'

const TestListItem = ({ id, text, difficulty }) => {
  return (
    <li className="flex items-center justify-between my-4 mx-4 p-2 pl-4 border border-gray-100 hover:border-blue-400 transition-colors shadow-sm rounded-md">
      <div className="flex"><p className="mr-2">{id}.</p><p>{text}</p></div>
      <section className="flex space-x-4">
        <p className="bg-blue-100 rounded-md p-1 px-2 text-sm">{difficulty}</p>
        <TestListItemButton id={id} text="풀어보기" />
      </section>
    </li>
  )
}

export default TestListItem
