import BaseCard from 'components/common/BaseCard/BaseCard'
import Hero from 'components/Hero/Hero'
import SelectDifficulty from 'components/SelectDifficulty/SelectDifficulty'
import SelectStudyMode from 'components/SelectStudyMode/SelectStudyMode'
import TestDetail from 'components/TestDetail/TestDetail'
import TestFilter from 'components/TestFilter/TestFilter'
import TestList from 'components/TestList/TestList'
import TestResult from 'components/TestResult/TestResult'
import TestWrapper from 'components/TestWrapper/TestWrapper'
import React from 'react'
import { Route } from 'react-router-dom'
import { useRecoilState } from 'recoil'
import { difficultyState, languageState, studyModeState } from 'store/store'
import styles from "./CenterLayout.module.css"

const CenterLayout = () => {
  const [language] = useRecoilState(languageState)
  const [difficulty] = useRecoilState(difficultyState)
  const [studyMode] = useRecoilState(studyModeState)

  return (
    <div className={styles['layout-center']}>
      <>
        {/* 메인 페이지 */}
        <Route path="/" exact>
          <BaseCard className={styles['layout-center']}>
            <Hero />
          </BaseCard>
        </Route>
        {/* 타입 선택 페이지 */}
        <Route path="/tests/" exact>
          <SelectStudyMode />
        </Route>
        {/* 문제 목록 페이지 */}
        <Route path="/tests/:language" exact>
          <>
            <TestFilter />
            <TestList />
          </>
        </Route>
        {/* 문제 상세 페이지 */}
        <Route path="/tests/:language/:id">
          <>
            <TestDetail />
          </>
        </Route>
      </>
    </div>
  )
}

export default CenterLayout
