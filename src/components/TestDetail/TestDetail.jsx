import BaseCard from 'components/common/BaseCard/BaseCard'
import BaseSubtitle from 'components/common/BaseSubtitle/BaseSubtitle'
import Scenario from 'components/Scenario/Scenario'
import VoiceRecorder from 'components/VoiceRecorder/VoiceRecorder'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import { useParams } from 'react-router'

const TestDetail = () => {
  let { id } = useParams()
  const [testDetailData, setTestDetailData] = useState({})
  const { language, difficulty } = testDetailData

  const fetchTestDetail = async (_id) => {
    await import("data/koreanTest.json").then(({ default: testData }) => {
      setTestDetailData(testData.filter(({ id }) => id === +_id)[0])
    })
  }

  useLayoutEffect(() => {
    fetchTestDetail(id)
  }, [id])

  return (
    <>
      <BaseSubtitle text={`${language} / ${id}번 / ${difficulty}`} />
      <BaseCard className="recorder-wrapper">
        <Scenario text={testDetailData.text} />
        <VoiceRecorder />
      </BaseCard >
    </>
  )
}

export default TestDetail
