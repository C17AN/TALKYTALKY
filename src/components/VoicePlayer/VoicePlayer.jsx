import BaseSubtitle from 'components/common/BaseSubtitle/BaseSubtitle'
import React, { useRef } from 'react'
import { InformationCircleIcon } from "@heroicons/react/solid"
import "./VoicePlayer.css"

const VoicePlayer = ({ audioFile, id }) => {

  const playerRef = useRef(null)
  const onPlay = () => {
    playerRef.current.play()
  }



  return (
    <div className="voice-player flex items-center justify-between rounded-md py-4 px-6 w-full mb-4 shadow-md border-l-8 border-blue-600">
      <section className="flex flex-col">
        <h2 className="m-0 text-xl font-semibold" >Step 1. 발음 들어보기</h2>
        <div className="flex items-center mt-2 text-gray-400">
          <InformationCircleIcon className="h-4 mr-1" />
          <p className="text-sm">본 기능은 Google Text-To-Speech 기술을 활용합니다.</p>
        </div>
      </section>
      {/* <div className="w-10 h-10 bg-blue-300" onClick={() => onPlay(playerRef)} ref={playerRef} controls="controls" autobuffer="autobuffer" > */}
      <source src={`data:audio/mp3;base64, ${audioFile}`} className="w-10 h-10 bg-blue-300" ref={playerRef} onClick={onPlay} />
      {/* </div> */}
    </div>
  )
}

export default VoicePlayer
