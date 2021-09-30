import React from 'react'
import waveBackground from 'assets/images/wavesOpacity.svg'
import TalkImage from "assets/images/talk-image.svg"
import "./Hero.css"

const Hero = () => {
  return (
    <>
      <img src={TalkImage} className="mb-8 hero-image" width="300" alt="hero" />
      <section className="hero-title text-center">
        <h1 className="text-7xl font-montserrat font-semibold mb-3">
          TALKY<span className="text-blue-500">TALKY</span>
        </h1>
        <p className="text-gray-500 text-xl">1분으로 끝내는 스피킹, 토키토키</p>
        <p className="mt-8 px-6 py-2 rounded-md bg-blue-500 text-white shadow-md cursor-pointer">
          좌측 메뉴에서 응시할 언어를 선택해주세요.
        </p>
      </section>
    </>
  )
}

export default Hero
