import BaseCard from 'components/common/BaseCard/BaseCard'
import BaseSubtitle from 'components/common/BaseSubtitle/BaseSubtitle'
import ScoreRecord from 'components/ScoreRecord/ScoreRecord'
import React from 'react'
import styles from "./ScoreBoard.module.css"

const ScoreBoard = () => {
  return (
    <>
      <BaseSubtitle text="실시간 채점 기록" />
      <BaseCard className={[styles['scoreboard-container'], "justify-start"].join(" ")}>
        <ScoreRecord />
        <ScoreRecord />
        <ScoreRecord />
      </BaseCard>
    </>
  )
}

export default ScoreBoard
