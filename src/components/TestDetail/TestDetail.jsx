import BaseCard from 'components/common/BaseCard/BaseCard'
import BaseSubtitle from 'components/common/BaseSubtitle/BaseSubtitle'
import Scenario from 'components/Scenario/Scenario'
import VoiceRecorder from 'components/VoiceRecorder/VoiceRecorder'
import LANGUAGE from 'constants/language'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import { useParams } from 'react-router'
import { useRecoilState } from 'recoil'
import { languageState } from 'store/store'

const TestDetail = () => {
  let { id } = useParams()
  const [testDetailData, setTestDetailData] = useState({})
  const [selectedLanguage] = useRecoilState(languageState)
  const { language, difficulty } = testDetailData

  const fetchTestDetail = async (_id) => {
    if (selectedLanguage === LANGUAGE.KOREAN) {
      await import("data/koreanTest.json").then(({ default: testData }) => {
        setTestDetailData(testData.filter(({ id }) => id === +_id)[0])
      })
    }
    else if (selectedLanguage === LANGUAGE.ENGLISH) {
      await import("data/englishTest.json").then(({ default: testData }) => {
        setTestDetailData(testData.filter(({ id }) => id === +_id)[0])
      })
    }
  }

  useLayoutEffect(() => {
    fetchTestDetail(id)
  }, [id])

  return (
    <>
      <BaseSubtitle text={`${language} / ${id}번 / ${difficulty}`} />
      <BaseCard className="recorder-wrapper p-4">
        <Scenario text={testDetailData.text} />
        <VoiceRecorder />
      </BaseCard >
    </>
  )
}

export default TestDetail
