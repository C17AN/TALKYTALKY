import BaseCard from 'components/common/BaseCard/BaseCard'
import Hero from 'components/Hero/Hero'
import SelectDifficulty from 'components/SelectDifficulty/SelectDifficulty'
import TestResult from 'components/TestResult/TestResult'
import TestWrapper from 'components/TestWrapper/TestWrapper'
import React from 'react'
import { useRecoilState } from 'recoil'
import { languageState } from 'store/store'
import styles from "./CenterLayout.module.css"

const CenterLayout = () => {
  const [language, _] = useRecoilState(languageState)
  return language ? (
    <div className={styles['layout-center']}>
      <>
        <SelectDifficulty />
        <TestWrapper />
        <TestResult />
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
