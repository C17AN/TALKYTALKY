import BaseCard from 'components/common/BaseCard/BaseCard'
import BaseSubtitle from 'components/common/BaseSubtitle/BaseSubtitle'
import TestItem from 'components/TestListItem/TestListItem'
import React, { useEffect, useState } from 'react'

const TestList = () => {
  const [testList, setTestList] = useState([])

  const fetchTestList = async () => {
    const testList = await import("data/koreanTest.json").then(res => console.log(res))
    console.log(testList)
    setTestList(testList)
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
            return <TestItem id={id} text={text} difficulty={difficulty} />
          })}
        </ul>
      </BaseCard>
    </>
  )
}

export default TestList
