import BaseCard from 'components/common/BaseCard/BaseCard'
import BaseSubtitle from 'components/common/BaseSubtitle/BaseSubtitle'
import ResultDescription from 'components/ResultDescription/ResultDescription'
import React from 'react'

const SpeechScore = () => {
  return (
    <>
      <BaseSubtitle text="스피킹 채점 결과" />
      <BaseCard>
        <div className="flex items-center m-4">
          <ResultDescription />
          <p className="text-4xl font-thin flex-1 mr-4">
            98.2점
          </p>
        </div>
      </BaseCard>
    </>
  )
}

export default SpeechScore
