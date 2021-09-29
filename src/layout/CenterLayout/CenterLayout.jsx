import BaseCard from 'components/common/BaseCard/BaseCard'
import Hero from 'components/Hero/Hero'
import SelectDifficulty from 'components/SelectDifficulty/SelectDifficulty'
import SelectStudyMode from 'components/SelectStudyMode/SelectStudyMode'
import TestDetail from 'components/TestDetail/TestDetail'
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
            <p>
              좌측 메뉴에서 응시할 언어를 선택해주세요.
            </p>
          </BaseCard>
        </Route>
        {/* 문제 목록 페이지 */}
        <Route path="/tests" exact>
          {studyMode ?
            <>
              <SelectDifficulty />
              <TestList />
              {/* <TestResult /> */}
            </> :
            <>
              <SelectStudyMode />
            </>
          }
        </Route>
        {/* 문제 상세 페이지 */}
        <Route path="/tests/:id">
          <>
            <TestDetail />
            <TestResult />
          </>
        </Route>
      </>
    </div>
  )
}

export default CenterLayout
