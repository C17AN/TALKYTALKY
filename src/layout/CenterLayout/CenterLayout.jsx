import BaseCard from 'components/common/BaseCard/BaseCard'
import SelectDifficulty from 'components/SelectDifficulty/SelectDifficulty'
import SpeechScore from 'components/SpeechScore/SpeechScore'
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
        <SpeechScore />
      </>
    </div>
  ) : <BaseCard className={styles['layout-center']}>
    좌측 메뉴에서 응시할 언어를 선택해주세요.</BaseCard>
}

export default CenterLayout
