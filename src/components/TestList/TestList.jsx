import BaseCard from 'components/common/BaseCard/BaseCard'
import BaseSubtitle from 'components/common/BaseSubtitle/BaseSubtitle'
import TestItem from 'components/TestListItem/TestListItem'
import React from 'react'

const TestList = () => {
  return (
    <>
      <BaseSubtitle text="예문 목록" />
      <BaseCard className="block">
        <ul className="block">
          <TestItem id="1" text="아버지 가방에 들어가신다" difficulty="쉬움" />
          <TestItem id="2" text="아버지 가방에 들어가신다" difficulty="쉬움" />
          <TestItem id="3" text="아버지 가방에 들어가신다" difficulty="쉬움" />
          <TestItem id="4" text="아버지 가방에 들어가신다" difficulty="쉬움" />
        </ul>
      </BaseCard>
    </>
  )
}

export default TestList
