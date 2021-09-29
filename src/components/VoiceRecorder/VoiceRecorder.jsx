import React, { useEffect, useRef } from 'react'

const VoiceRecorder = () => {
  const playerRef = useRef(null)
  const stopButtonRef = useRef(null)
  const startButtonRef = useRef(null)
  const downloadLinkRef = useRef(null)

  const handleSuccess = function (stream) {
    console.log(stream);
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

    stopButtonRef.current.addEventListener('click', function () {
      mediaRecorder.stop();
    });

    mediaRecorder.start();
  };

  useEffect(() => {
    navigator.mediaDevices.getUserMedia({ audio: true, video: false }).then(handleSuccess);
  }, [])
  return (
    <>
      <div className="flex justify-center">
        <audio className="player" controls ref={playerRef}></audio>
      </div>
      <div className="flex justify-end space-x-4 p-4">
        <button ref={stopButtonRef}>정지</button>
        <a ref={downloadLinkRef} href="">다운로드</a>
      </div>
    </>
  )
}

export default VoiceRecorder
