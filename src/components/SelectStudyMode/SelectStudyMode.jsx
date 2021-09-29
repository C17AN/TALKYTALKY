import BaseCard from 'components/common/BaseCard/BaseCard'
import BaseSubtitle from 'components/common/BaseSubtitle/BaseSubtitle'
import ModeButton from './StudyModeButton'
import React from 'react'
import { useRecoilState } from 'recoil'
import { studyModeState } from 'store/store'
import StudyImage from "assets/images/study-image.svg"
import TestImage from "assets/images/test-image.svg"
import STUDYMODE from "constants/studyMode"
import StudyModeDescription from './StudyModeDescription'

const SelectStudyMode = () => {
  return (
    <>
      <BaseSubtitle text="학습유형 선택" />
      <BaseCard className="mb-4 block h-4/5">
        <div className="m-4">
          <h1 className="text-center mb-4 text-lg font-semibold text-gray-600">학습할 타입을 선택하세요</h1>
          <section className="flex justify-center space-x-6">
            <ModeButton text="학습 모드" icon={StudyImage} studyType={STUDYMODE.PRACTICE} />
            <ModeButton text="테스트 모드" icon={TestImage} studyType={STUDYMODE.TEST} />
          </section>
          <StudyModeDescription />
        </div>
      </BaseCard>
    </>
  )
}

export default SelectStudyMode
