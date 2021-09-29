import BaseCard from 'components/common/BaseCard/BaseCard'
import BaseSubtitle from 'components/common/BaseSubtitle/BaseSubtitle'
import Scenario from 'components/Scenario/Scenario'
import VoiceRecorder from 'components/VoiceRecorder/VoiceRecorder'
import React from 'react'

const TestDetail = () => {
  return (
    <>
      <BaseSubtitle text="한국어 / 어려움 / 2168번" />
      <BaseCard className="recorder-wrapper">
        <Scenario />
        <VoiceRecorder />
      </BaseCard >
    </>
  )
}

export default TestDetail
