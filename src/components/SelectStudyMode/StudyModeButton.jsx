import React from 'react'
import { useRecoilState } from 'recoil'
import { studyModeState } from 'store/store'
import styles from "./SelectStudyMode.module.css"

const StudyModeButton = ({ text, studyType, icon, onHover, onBlur }) => {
  const [studyMode, setStudyMode] = useRecoilState(studyModeState)

  return (
    <button
      className={[styles['study-mode--button'], "relative hover:border-blue-500 hover:bg-blue-100 transition-all h-80 bg-blue-50"].join(" ")}
      onClick={() => setStudyMode(studyType)}
      onMouseEnter={onHover}
      onMouseLeave={onBlur}>
      <img src={icon} alt="학습 타입" height="240" />
      <p className="absolute bottom-4 right-4 text-lg text-gray-600 font-semibold">{text}</p>
    </button >
  )
}

export default StudyModeButton
