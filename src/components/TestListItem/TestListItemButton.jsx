import React from 'react'
import { Link } from 'react-router-dom'
import { useRecoilState } from 'recoil'
import { languageState } from 'store/store'

const TestListItemButton = ({ text, onClick, id }) => {
  const [language] = useRecoilState(languageState)
  return (
    <Link to={`/tests/${language}/${id}`}>
      <button onClick={onClick} className="p-1 px-3 bg-indigo-50 rounded-md text-sm">
        {text}
      </button>
    </Link>
  )
}

export default TestListItemButton
