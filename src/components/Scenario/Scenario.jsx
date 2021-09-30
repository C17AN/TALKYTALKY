import React from 'react'

const Scenario = ({ text }) => {
  return (
    <div className="w-full px-4 py-2 mb-4 border-l-8 bg-gray-50 shadow-md rounded-md border-indigo-800">
      <h2 className="text-gray-400 font-semibole text-lg mb-2">예문 [발음 들어보기]</h2>
      <p>{text}</p>
    </div>
  )
}

export default Scenario
