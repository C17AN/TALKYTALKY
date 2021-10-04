import React from 'react'
import loadingAnimation from "assets/images/loading-animated.svg"
import "./LoadingEvaluation.css"

const LoadingEvaluation = () => {
  return (
    <div className="flex items-center justify-center">
      <img src={loadingAnimation} alt="loading" className="loading-svg" />
      <p className="font-semibold text-lg ml-2 text-gray-500">평가를 기다리고 있습니다.</p>
    </div>
  )
}

export default LoadingEvaluation