import BaseCard from 'components/common/BaseCard/BaseCard'
import BaseSubtitle from 'components/common/BaseSubtitle/BaseSubtitle'
import TestListItem from 'components/TestListItem/TestListItem'
import React, { useEffect, useState } from 'react'
import { useRecoilState } from 'recoil'
import { testListState } from 'store/store'

const TestList = () => {
  const [testList, setTestList] = useRecoilState(testListState)

  const fetchTestList = async () => {
    await import("data/koreanTest.json").then(testData => {
      setTestList(testData.default)
    })
  }

  useEffect(() => {
    fetchTestList()
  }, [])

  return (
    <>
      <BaseSubtitle text="예문 목록" />
      <BaseCard className="block">
        <ul className="block">
          {testList?.map(testData => {
            const { id, text, difficulty, language } = testData
            return <TestListItem id={id} text={text} difficulty={difficulty} />
          })}
        </ul>
      </BaseCard>
    </>
  )
}

export default TestList
