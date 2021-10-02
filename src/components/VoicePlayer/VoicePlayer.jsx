import BaseSubtitle from 'components/common/BaseSubtitle/BaseSubtitle'
import React, { useRef } from 'react'
import { InformationCircleIcon } from "@heroicons/react/solid"
import { PlayIcon, StopIcon } from '@heroicons/react/solid'
import "./VoicePlayer.css"
import { useState } from 'react'

const VoicePlayer = ({ audioFile, id }) => {
  const [isPlaying, setIsPlaying] = useState(false)

  const playerRef = useRef(null)
  const onPlay = () => {
    setIsPlaying(true)
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
      <section
        className="flex items-center text-sm text-gray-400 px-4 py-1 hover:text-blue-200 rounded-md border border-gray-200 cursor-pointer"
        onClick={() => onPlay(playerRef)} >
        {isPlaying ?
          <StopIcon className="h-8 w-8" /> :
          <PlayIcon className="h-8 w-8 transition-colors" />}
        <p className="font-semibold ml-2">재생 시작</p>
      </section>
      {/* 실제 오디오 부분은 기능으로만 존재, 뷰에서는 숨김 처리 */}
      <audio
        className="player" ref={playerRef} controls="controls" autobuffer="autobuffer"
        onEnded={() => setIsPlaying(false)}
      >
        <source src={`data:audio/mp3;base64, ${audioFile}`} className="w-10 h-10 bg-blue-300" />
      </audio>
    </div >
  )
}

export default VoicePlayer
