import { requestTTSApi } from 'apis/TTS/postTTS'
import BaseButton from 'components/common/BaseButton/BaseButton'
import BaseCard from 'components/common/BaseCard/BaseCard'
import BaseSubtitle from 'components/common/BaseSubtitle/BaseSubtitle'
import Scenario from 'components/Scenario/Scenario'
import ScenarioTag from 'components/Scenario/ScenarioTag'
import TestResult from 'components/TestResult/TestResult'
import VoicePlayer from 'components/VoicePlayer/VoicePlayer'
import VoiceRecorder from 'components/VoiceRecorder/VoiceRecorder'
import setAudioConfig from 'utils/setAudioConfig'
import LANGUAGE from 'constants/language'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import { useParams } from 'react-router'
import { useRecoilState } from 'recoil'
import { languageState } from 'store/store'

const TestDetail = () => {
  let { language, id } = useParams()
  const [testDetailData, setTestDetailData] = useState(null)
  const [testScript, setTestScript] = useState(null)
  const [testDifficulty, setTestDifficulty] = useState(null)
  const [selectedLanguage, setSelectedLanguage] = useRecoilState(languageState)
  const [TTSaudio, setTTSAudio] = useState(null)
  const [TTSConfig, setTTSConfig] = useState(setAudioConfig(language))
  const [isWaiting, setIsWaiting] = useState(true)

  const fetchTestDetail = async (_id) => {
    if (selectedLanguage === LANGUAGE.KOREAN) {
      await import("data/koreanTest.json").then(({ default: testData }) => {
        const testDetail = testData.filter(({ id }) => id === +_id)[0]
        setTestScript(testDetail.text)
        setTestDifficulty(testDetail.difficulty)
        fetchTTSAudioData(testDetail.text)
      })
    }
    else if (selectedLanguage === LANGUAGE.ENGLISH) {
      await import("data/englishTest.json").then(({ default: testData }) => {
        const testDetail = testData.filter(({ id }) => id === +_id)[0]
        setTestScript(testDetail.text)
        setTestDifficulty(testDetail.difficulty)
        fetchTTSAudioData(testDetail.text)
      })
    }
  }

  const fetchTTSAudioData = async (text) => {
    const res = await requestTTSApi({ ...TTSConfig, text });
    const { audioContent } = res.data
    setTTSAudio(audioContent)
  }

  useLayoutEffect(() => {
    // 새로고침 했을 시, 스토어가 날아가는걸 방지하기 위한 코드
    setSelectedLanguage(language)
  }, [])

  useEffect(() => {
    fetchTestDetail(id)
  }, [selectedLanguage])


  return (
    <>
      <div className="flex justify-between mb-4 items-center">
        <BaseSubtitle text={`${id}번 : ${testScript}`} />
        <ScenarioTag text={language} />
      </div>
      <BaseCard className="test-detail-container p-4 h-full flex flex-col justify-start">
        <Scenario text={testScript} difficulty={testDifficulty} language={language} id={id} />
        <div className="flex flex-col justify-evenly w-full">
          {TTSaudio && <VoicePlayer audioFile={TTSaudio} />}
          <VoiceRecorder
            text={testScript}
            language={language}
            setIsWaiting={setIsWaiting}
          />
        </div>
        <TestResult
          isWaiting={isWaiting}
        />
        <section className="flex justify-between w-full">
          <BaseButton text="이전 문제" />
          <BaseButton text="다음 문제" />
        </section>
      </BaseCard >
    </>
  )
}

export default TestDetail
