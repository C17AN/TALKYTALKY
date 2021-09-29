import BaseCard from 'components/common/BaseCard/BaseCard'
import BaseSubtitle from 'components/common/BaseSubtitle/BaseSubtitle'
import ResultDescription from 'components/ResultDescription/ResultDescription'
import React from 'react'
import Score from 'components/Score/Score'

const TestResult = () => {
  return (
    <>
      <BaseSubtitle text="스피킹 채점 결과" />
      <BaseCard>
        <div className="flex items-center m-4">
          <Score score={98.2}></Score>
          <ResultDescription />
        </div>
      </BaseCard>
    </>
  )
}

export default TestResult
