import React from 'react'
import waveBackground from 'assets/images/wavesOpacity.svg'
import TalkImage from "assets/images/talk-image.svg"

const Hero = () => {
  return (
    <>
      <img src={TalkImage} className="mb-8" width="300" alt="hero" />
      <h1 className="text-7xl font-montserrat font-semibold mb-3">
        TALKY<span className="text-blue-500">TALKY</span>
      </h1>
      <p className="text-gray-500 text-xl">1분으로 끝내는 스피킹, 토키토키</p>
    </>
  )
}

export default Hero
