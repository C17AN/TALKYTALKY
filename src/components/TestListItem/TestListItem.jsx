import { motion } from 'framer-motion'
import React from 'react'
import TestListItemButton from './TestListItemButton'
import "./TestListItem.css"

const TestListItem = ({ id, text, difficulty }) => {
  return (
    <motion.li
      transition={{
        duration: 0.2
      }}
      whileHover={{
        scale: 1.005,
      }
      }
      className="flex items-center justify-between my-4 mx-4 p-2 pl-4 border border-gray-100 hover:border-blue-400 transition-colors shadow-sm rounded-md cursor-pointer" >
      <div className="flex mr-16 text-list-text-container">
        <p className="mr-2">{id}.</p>
        <p className="test-list-text">{text}</p>
      </div>
      <section className="flex space-x-4">
        <p className="bg-blue-100 rounded-md p-1 px-2 text-sm">{difficulty}</p>
        <TestListItemButton id={id} text="풀어보기" />
      </section>
    </motion.li >
  )
}

export default TestListItem
