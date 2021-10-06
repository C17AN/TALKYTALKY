import React from 'react'
import { Link } from 'react-router-dom'
import { useRecoilState } from 'recoil'
import { languageState, studyModeState } from 'store/store'

const TestListItemButton = ({ text, onClick, id }) => {
  const [language] = useRecoilState(languageState)
  const [studyMode] = useRecoilState(studyModeState)

  return (
    <Link to={`/${studyMode}/${language}/${id}`}>
      <button onClick={onClick} className="p-1 px-3 bg-indigo-50 rounded-md text-sm">
        {text}
      </button>
    </Link>
  )
}

export default TestListItemButton
