import { requestTTSApi } from 'apis/TTS/postTTS'
import BaseCard from 'components/common/BaseCard/BaseCard'
import BaseSubtitle from 'components/common/BaseSubtitle/BaseSubtitle'
import Scenario from 'components/Scenario/Scenario'
import VoicePlayer from 'components/VoicePlayer/VoicePlayer'
import VoiceRecorder from 'components/VoiceRecorder/VoiceRecorder'
import { audioConfig } from 'constants/audioConfig'
import LANGUAGE from 'constants/language'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import { useParams } from 'react-router'
import { useRecoilState } from 'recoil'
import { languageState } from 'store/store'



const TestDetail = () => {
  let { language, id } = useParams()
  const [testDetailData, setTestDetailData] = useState({})
  const [selectedLanguage, setSelectedLanguage] = useRecoilState(languageState)
  const [TTSaudio, setTTSAudio] = useState(null)
  const [TTSConfig, setTTSConfig] = useState(audioConfig)
  const { difficulty } = testDetailData


  const fetchTestDetail = async (_id) => {
    if (selectedLanguage === LANGUAGE.KOREAN) {
      await import("data/koreanTest.json").then(({ default: testData }) => {
        const testDetail = testData.filter(({ id }) => id === +_id)[0]
        setTestDetailData(testDetail)
        fetchTTSAudioData(testDetail.text)
      })
    }
    else if (selectedLanguage === LANGUAGE.ENGLISH) {
      await import("data/englishTest.json").then(({ default: testData }) => {
        const testDetail = testData.filter(({ id }) => id === +_id)[0]
        setTestDetailData(testDetail)
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
    setSelectedLanguage(language)
  }, [])

  useEffect(() => {
    fetchTestDetail(id)
  }, [selectedLanguage])


  return (
    <>
      <BaseSubtitle text={`${id}번 : ${testDetailData?.text}`} />
      <BaseCard className="recorder-wrapper p-4 h-full flex flex-col justify-start">
        <Scenario text={testDetailData?.text} difficulty={difficulty} language={language} id={id} />
        <div className="flex flex-col justify-evenly w-full">
          {TTSaudio && <VoicePlayer audioFile={TTSaudio} />}
          <VoiceRecorder />
        </div>
      </BaseCard >
    </>
  )
}

export default TestDetail
