import BaseCard from 'components/common/BaseCard/BaseCard'
import BaseSubtitle from 'components/common/BaseSubtitle/BaseSubtitle'
import React from 'react'
import styles from "./ScoreBoard.module.css"

const ScoreBoard = () => {
  return (
    <>
      <BaseSubtitle text="채점 기록" />
      <BaseCard className={styles['scoreboard-container']}>
      </BaseCard>
    </>
  )
}

export default ScoreBoard
