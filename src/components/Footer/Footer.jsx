import React from 'react'

const Footer = () => {
  return (
    <footer className="absolute flex items-center justify-between bottom-0 w-screen h-16 bg-blue-100 px-8">
      <p>TEAM TALKY<span className="text-blue-500">TALKY</span> @2021</p>
      <p className="text-gray-400 text-sm">본 서비스는 ETRI(한국전자통신연구원) 발음평가 API와 GOOGLE 음성 합성 API를 활용합니다.</p>
    </footer>
  )
}

export default Footer
