import React, { useEffect, useRef, useState } from 'react'
import { InformationCircleIcon, PlayIcon, StopIcon } from '@heroicons/react/solid'
import "./VoiceRecorder.css"

// 이 코드는 블로그에 정리하기!!
// 아주 유용할듯!

const VoiceRecorder = () => {
  const [isRecording, setIsRecording] = useState(false)
  const [currentAudio, setCurrentAudio] = useState(null)
  const playerRef = useRef(null)
  let mediaRecorder = null

  const toggleRecordingState = () => {
    const { state: recordingState } = mediaRecorder
    if (recordingState !== "recording") {
      setIsRecording(true)
      mediaRecorder.start()
    }
    else if (recordingState === "recording") {
      setIsRecording(false)
      mediaRecorder.stop()
    }
  }

  useEffect(() => {
    navigator.mediaDevices.getUserMedia({ audio: true, video: false }).then(handleSuccess);
  }, [])

  const handleSuccess = function (stream) {
    const options = { mimeType: 'audio/webm' };
    const recordedChunks = [];
    mediaRecorder = new MediaRecorder(stream, options);

    mediaRecorder.addEventListener('dataavailable', function (e) {
      if (e.data.size > 0) recordedChunks.push(e.data);
    });

    mediaRecorder.addEventListener('stop', function () {
      const audioBlob = new Blob(recordedChunks);
      var reader = new window.FileReader();
      reader.readAsDataURL(audioBlob);
      let base64Audio = null
      reader.onloadend = function () {
        base64Audio = reader.result;
        base64Audio = base64Audio.split(',')[1];
        setCurrentAudio(base64Audio)
        console.log(currentAudio)
      }
    });

    playerRef.current.addEventListener('click', () => {
      toggleRecordingState()
    })
  };


  return (
    <div className="flex justify-between items-center rounded-md py-4 px-6 w-full shadow-md border-l-8 border-blue-400">
      <section className="flex flex-col">
        <h2 className="font-semibold text-xl">Step 2. 내 발음 입력하기</h2>
        <div className="flex items-center mt-2 text-gray-400">
          <InformationCircleIcon className="h-4 mr-1" />
          <p className="text-sm">본 기능은 ETRI 발음평가 기술을 활용합니다.</p>
        </div>
      </section>
      <section
        ref={playerRef}
        className="flex items-center text-sm text-gray-400 px-4 py-1 hover:text-blue-200 rounded-md border border-gray-200 cursor-pointer"
      >
        {isRecording ?
          <StopIcon className="h-8 w-8" /> :
          <PlayIcon className="h-8 w-8 transition-colors" />}
        <p className="font-semibold ml-2">녹음 시작</p>
      </section>
      {/* {currentAudio && <audio controls autobuffer="autobuffer">
        <source src={`data:audio/mp3;base64, ${currentAudio}`} />
      </audio>} */}
    </div>
  )
}

export default VoiceRecorder
