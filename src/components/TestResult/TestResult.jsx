import BaseCard from 'components/common/BaseCard/BaseCard'
import BaseSubtitle from 'components/common/BaseSubtitle/BaseSubtitle'
import ResultDescription from 'components/ResultDescription/ResultDescription'
import React from 'react'
import Score from 'components/Score/Score'
import { useRecoilState } from 'recoil'
import { testResultState } from 'store/store'

const TestResult = () => {

  const [testResult,] = useRecoilState(testResultState)
  const { score } = testResult

  return (
    <>
      <div className="voice-player flex items-center justify-between rounded-md py-4 px-6 w-full mb-4 shadow-md border-l-8 border-green-100">
        <div className="flex items-center">
          <Score score={score}></Score>
          <ResultDescription />
        </div>
      </div>
    </>
  )
}

export default TestResult
