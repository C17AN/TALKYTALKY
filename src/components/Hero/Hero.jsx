import React from 'react'
import waveBackground from 'assets/images/wavesOpacity.svg'

const Hero = () => {
  return (
    <>
      <h1 className="text-7xl font-montserrat font-semibold mb-3">
        TALKY<span className="text-blue-500">TALKY</span>
      </h1>
      <p className="text-gray-500 text-xl">1분으로 끝내는 스피킹, 토키토키</p>
      <div className="custom-shape-divider-bottom-1632898489">
        <img src={waveBackground} alt="" />
      </div>
    </>
  )
}

export default Hero
