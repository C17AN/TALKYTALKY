import React, { useEffect, useState } from 'react'
import { setScoreTextHelper } from 'utils/setScoreTextHelper'

const Score = ({ score }) => {

  const [scoreText, setScoreText] = useState(null)
  useEffect(() => {
    setScoreText(setScoreTextHelper(score))
  }, [])

  return (
    <div className="flex flex-col justify-center">
      <div className="font-thin text-4xl mx-4 my-1">
        {score}
      </div>
      <p className="text-center">{scoreText}</p>
    </div>
  )
}

export default Score
