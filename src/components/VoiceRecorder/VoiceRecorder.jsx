import React, { useEffect, useRef, useState } from 'react'
import { InformationCircleIcon, PlayIcon, StopIcon } from '@heroicons/react/solid'
import "./VoiceRecorder.css"

const VoiceRecorder = () => {
  const [isPlaying, setIsPlaying] = useState(false)
  const playerRef = useRef(null)
  const stopButtonRef = useRef(null)
  const startButtonRef = useRef(null)
  const downloadLinkRef = useRef(null)

  const handleSuccess = function (stream) {
    if (window.URL) {
      playerRef.current.srcObject = stream;
    } else {
      playerRef.current.src = stream;
    }


    const options = { mimeType: 'audio/webm' };
    const recordedChunks = [];
    const mediaRecorder = new MediaRecorder(stream, options);

    mediaRecorder.addEventListener('dataavailable', function (e) {
      if (e.data.size > 0) recordedChunks.push(e.data);
    });

    mediaRecorder.addEventListener('stop', function () {
      downloadLinkRef.current.href = URL.createObjectURL(new Blob(recordedChunks));
      downloadLinkRef.current.download = 'acetest.wav';
    });

    // stopButtonRef.current.addEventListener('click', function () {
    //   mediaRecorder.stop();
    // });

    mediaRecorder.start();
  };

  useEffect(() => {
    navigator.mediaDevices.getUserMedia({ audio: true, video: false }).then(handleSuccess);
  }, [])
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
        className="flex items-center text-sm text-gray-400 px-4 py-1 hover:text-blue-200 rounded-md border border-gray-200 cursor-pointer"
        onClick={() => onplay(playerRef)} >
        {isPlaying ?
          <StopIcon className="h-8 w-8" /> :
          <PlayIcon className="h-8 w-8 transition-colors" />}
        <p className="font-semibold ml-2">녹음 시작</p>
      </section>
      <audio className="player" controls ref={playerRef} autobuffer="autobuffer">
        <source src={`data:audio/mp3;base64, hello`} />
      </audio>
      {/* <div className="flex justify-end space-x-4 p-4">
        <button ref={stopButtonRef}>정지</button>
        <a ref={downloadLinkRef} href="">다운로드</a>
      </div> */}
    </div>
  )
}

export default VoiceRecorder
