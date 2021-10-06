import { motion } from 'framer-motion'
import TestListItemButton from './TestListItemButton'
import "./TestListItem.scss"
import { categoryClassNameSetter, difficultyClassNameSetter } from 'utils/classNameSetter'
import { parseCategoryName } from 'utils/parseCategoryName'
import { parseDifficultyName } from 'utils/parseDifficultyName'

const TestListItem = ({ id, text, category, difficulty }) => {
  return (
    <motion.li
      transition={{
        duration: 0.2
      }}
      whileHover={{
        scale: 1.005,
      }
      }
      className="flex items-center justify-between my-4 mx-4 p-2 pl-4 border border-gray-100 hover:bg-blue-50 transition-colors shadow-sm rounded-md cursor-pointer" >
      <div className="flex text-list-text-container">
        <p className="pr-2">{id}.</p>
        <p className="pl-1 test-list-text">{text}</p>
      </div>
      <section className="flex space-x-4">
        <p className={`${categoryClassNameSetter(category)} rounded-md p-1 px-2 text-sm`}>{parseCategoryName(category)}</p>
        <p className={`${difficultyClassNameSetter(difficulty)} rounded-md p-1 px-2 text-sm`}>{parseDifficultyName(difficulty)}</p>
        <TestListItemButton id={id} text="풀어보기" />
      </section>
    </motion.li >
  )
}

export default TestListItem
