
import React, { useEffect } from 'react'
import { useRecoilState } from 'recoil'
import { testResultState } from 'store/store'


const ResultDescription = () => {
  const [testResult,] = useRecoilState(testResultState)

  useEffect(() => {
    import("data/resultText.json").then(({ resultText }) => {console.log(testResult);console.log(resultText)})
  }, [])

  return (
    <div className="result-description-summary ml-4 mr-6 text-sm">
    </div>
  )
}

export default ResultDescription
