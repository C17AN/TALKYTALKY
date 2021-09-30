import BaseCard from 'components/common/BaseCard/BaseCard'
import STUDYMODE from 'constants/studyMode'
import React, { useEffect } from 'react'
import { useState } from 'react'

const StudyModeDescription = ({ tempStudyStatus }) => {
  const [modeDescription, setModeDescription] = useState(null)

  useEffect(() => {
    if (tempStudyStatus === STUDYMODE.PRACTICE) {
      setModeDescription("🚌 학습 모드입니다. 점수가 매겨지지 않으며, 시간 제한 없이 학습을 진행할 수 있습니다.")
    } else if (tempStudyStatus === STUDYMODE.TEST) {
      setModeDescription("✏️ 시험 모드입니다. 원하는 카테고리를 선택하고, 시간 제한과 점수를 통해 결과를 평가합니다.")
    } else {
      setModeDescription(null)
    }
  }, [tempStudyStatus])

  return modeDescription && (
    <BaseCard className="mt-4">
      <p className="p-4">{modeDescription}</p>
    </BaseCard>
  )
}

export default StudyModeDescription
