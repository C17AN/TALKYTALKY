import React, { useEffect, useRef, useState } from 'react'
import { InformationCircleIcon, PlayIcon, StopIcon } from '@heroicons/react/solid'
import "./VoiceRecorder.css"
import toWav from "audiobuffer-to-wav"
import { requestSpeechAPI } from 'apis/Speech/postSpeech'
import { useRecoilState } from 'recoil'
import { testResultState } from 'store/store'
import { setScoreTextHelper } from 'utils/setScoreTextHelper'

// 이 코드는 블로그에 정리하기!!
// 아주 유용할듯!

const VoiceRecorder = ({ id, text: script, language, setIsWaiting }) => {
  const [isRecording, setIsRecording] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)

  const [testResult, setTestResult] = useRecoilState(testResultState)

  const playerRef = useRef(null)
  const recorderRef = useRef(null)

  const onPlay = () => {
    setIsPlaying(true)
    playerRef.current.play()
  }

  let mediaRecorder = null

  const toggleRecordingState = () => {
    const { state: recordingState } = mediaRecorder
    if (recordingState !== "recording") {
      setIsRecording(true)
      setTestResult(null)
      mediaRecorder.start()
    }
    else if (recordingState === "recording") {
      setIsRecording(false)
      mediaRecorder.stop()
    }
  }

  useEffect(() => {
    if (script && language) {
      navigator.mediaDevices.getUserMedia({ audio: true, video: false }).then(handleSuccess);
    }
  }, [script, language, id])

  const handleSuccess = function (stream) {
    const options = {
      mimeType: 'audio/webm;',
      audioBitsPerSecond: 16000,
      bitsPerSecond: 16000
    };
    const recordedBlob = [];
    mediaRecorder = new MediaRecorder(stream, options);

    mediaRecorder.addEventListener('dataavailable', function (e) {
      if (e.data.size > 0) recordedBlob.push(e.data);
    });

    mediaRecorder.addEventListener('stop', () => {
      const audioContext = new AudioContext({
        sampleRate: 16000,
      });
      // recordedChunks는 Blob 타입임!
      const audioBlob = recordedBlob[0]

      // TODO: 여기부터 주석 풀면됨
      const blobReader = new FileReader()
      blobReader.readAsArrayBuffer(audioBlob)

      blobReader.onloadend = async () => {
        let arrayBuffer = blobReader.result;
        // FROM : 44KHZ ArrayBuffer => TO : 16KHZ AudioBuffer
        audioContext.decodeAudioData(arrayBuffer, async (resampledBuffer) => {
          // FROM : Resampled AudioBuffer => TO : Wav ArrayBuffer
          const wavBuffer = toWav(resampledBuffer)
          const recordedBufferTobase64 = Buffer.from(wavBuffer).toString('base64')
          playerRef.current.src = window.URL.createObjectURL(new Blob([wavBuffer], { type: 'audio/webm;' }));
          const { data: { return_object: { score } } } = await requestSpeechAPI({ audio: recordedBufferTobase64, script, language: language })
          const { resultCode } = setScoreTextHelper(Number(score * 20).toFixed(2)) 
          setTestResult({ ...testResult, resultCode, score: Number(score * 20).toFixed(2) })
          setIsWaiting(false)
        })
      }
    });

    recorderRef.current.addEventListener('click', () => {
      toggleRecordingState()
    })
  };


  return (
    <div className="flex justify-between items-center rounded-md mb-4 py-4 px-6 w-full shadow-md border-l-8 border-blue-400">
      <section className="flex flex-col">
        <h2 className="font-semibold text-xl">Step 2. 내 발음 입력하기</h2>
        <div className="flex items-center mt-2 text-gray-400">
          <InformationCircleIcon className="h-4 mr-1" />
          <p className="text-sm">본 기능은 ETRI 발음평가 기술을 활용합니다.</p>
        </div>
      </section>
      <div className="flex space-x-4 recorder-container">
        <section
          ref={recorderRef}
          className="flex items-center text-sm text-gray-400 px-4 py-1 hover:text-blue-200 rounded-md border border-gray-200 cursor-pointer"
        >
          {isRecording ?
            <StopIcon className="h-8 w-8" /> :
            <PlayIcon className="h-8 w-8 transition-colors" />}
          <p className="font-semibold ml-2">{isRecording ? "녹음 중지" : "녹음 시작"}</p>
        </section>
        <div className="flex flex-col recorder-player">
          <section
            className="flex items-center text-sm text-gray-400 px-4 py-1 hover:text-blue-200 rounded-md border border-gray-200 cursor-pointer"
            onClick={() => onPlay(playerRef)} >
            {isPlaying ?
              <StopIcon className="h-8 w-8" /> :
              <PlayIcon className="h-8 w-8 transition-colors" />}
            <p className="font-semibold ml-2">결과 재생</p>
          </section>
        </div>
        <audio controls autobuffer="autobuffer" ref={playerRef} className="record-player" />
      </div>
    </div>
  )
}

export default VoiceRecorder
