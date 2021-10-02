import BaseCard from 'components/common/BaseCard/BaseCard'
import BaseSubtitle from 'components/common/BaseSubtitle/BaseSubtitle'
import TestListItem from 'components/TestListItem/TestListItem'
import ReactPaginate from "react-paginate"
import React, { useLayoutEffect, useState } from 'react'
import { useRecoilState } from 'recoil'
import { languageState, testListState } from 'store/store'
import "./TestList.css"
import LANGUAGE from 'constants/language'
import { v4 as uuidv4 } from "uuid"

const TestList = () => {
  const [testList, setTestList] = useRecoilState(testListState)
  const [selectedLanguage] = useRecoilState(languageState)

  const fetchTestList = async () => {
    if (selectedLanguage === LANGUAGE.KOREAN) {
      await import("data/koreanTest.json").then(testData => {
        setTestList(testData.default)
      })
    } else if (selectedLanguage === LANGUAGE.ENGLISH) {
      await import("data/englishTest.json").then(testData => {
        setTestList(testData.default)
      })
    }
  }

  useLayoutEffect(() => {
    fetchTestList()
  }, [])

  return (
    <>
      <BaseSubtitle text="예문 목록" />
      <BaseCard className="test-list-wrapper block">
        <ul className="w-full">
          {testList?.map(testData => {
            const { id, text, difficulty, language, category } = testData
            return (
              <TestListItem
                id={id}
                text={text}
                difficulty={difficulty}
                category={category}
                key={uuidv4()} />
            )
          })}
        </ul>
      </BaseCard>
    </>
  )
}

export default TestList
