
import React from 'react'
import { useRecoilState } from 'recoil'
import { testResultState } from 'store/store'

const ResultDescription = () => {
  const [testResult,] = useRecoilState(testResultState)

  return (
    <div className="result-description-summary ml-4 mr-6 text-sm">
      이 구간대에 분포하신 분은 발음은 원어민에 가까우나, 강세 및 억양이 약간 불안정한 분들입니다.
      다만, 이 부분만 개선된다면 충분히 실제 시험에서도 좋은 성적을 기대할 수 있을 것으로 보입니다.
    </div>
  )
}

export default ResultDescription
