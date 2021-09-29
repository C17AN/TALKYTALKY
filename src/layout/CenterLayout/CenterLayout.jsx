import BaseCard from 'components/common/BaseCard/BaseCard'
import Hero from 'components/Hero/Hero'
import SelectDifficulty from 'components/SelectDifficulty/SelectDifficulty'
import SelectStudyMode from 'components/SelectStudyMode/SelectStudyMode'
import TestResult from 'components/TestResult/TestResult'
import TestWrapper from 'components/TestWrapper/TestWrapper'
import React from 'react'
import { useRecoilState } from 'recoil'
import { difficultyState, languageState, studyModeState } from 'store/store'
import styles from "./CenterLayout.module.css"

const CenterLayout = () => {
  const [language] = useRecoilState(languageState)
  const [difficulty] = useRecoilState(difficultyState)
  const [studyMode] = useRecoilState(studyModeState)

  return language ? (
    <div className={styles['layout-center']}>
      <>
        {studyMode ?
          <>
            <SelectDifficulty />
            <TestWrapper />
            <TestResult />
          </> :
          <>
            <SelectStudyMode />
          </>
        }
      </>
    </div>
  ) :
    <BaseCard className={styles['layout-center']}>
      <Hero />
      <p>
        좌측 메뉴에서 응시할 언어를 선택해주세요.
      </p>
    </BaseCard>
}

export default CenterLayout
