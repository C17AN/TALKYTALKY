import TestItem from 'components/TestItem/TestItem'
import React from 'react'

const TestList = () => {

  return (
    <ul className="block">
      <TestItem id="1" text="아버지 가방에 들어가신다" difficulty="쉬움" />
      <TestItem id="2" text="아버지 가방에 들어가신다" difficulty="쉬움" />
      <TestItem id="3" text="아버지 가방에 들어가신다" difficulty="쉬움" />
      <TestItem id="4" text="아버지 가방에 들어가신다" difficulty="쉬움" />
    </ul>
  )
}

export default TestList
