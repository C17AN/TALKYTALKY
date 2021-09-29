import React, { useEffect, useState } from 'react'
import { setScoreTextHelper } from 'utils/setScoreTextHelper'
import "./Score.css"

const Score = ({ score }) => {
  const [scoreText, setScoreText] = useState(null)
  const [scoreClassName, setScoreClassName] = useState(null)

  useEffect(() => {
    const { text, className } = setScoreTextHelper(score)
    setScoreText(text)
    setScoreClassName(className)
  }, [])

  return (
    <div className="flex flex-col justify-center">
      <div className={`font-thin text-4xl mx-4 my-1 ${scoreClassName}`}>
        {score}
      </div>
      <p className="text-center">{scoreText}</p>
    </div>
  )
}

export default Score
