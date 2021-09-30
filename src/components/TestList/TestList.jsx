import BaseCard from 'components/common/BaseCard/BaseCard'
import BaseSubtitle from 'components/common/BaseSubtitle/BaseSubtitle'
import TestListItem from 'components/TestListItem/TestListItem'
import ReactPaginate from "react-paginate"
import React, { useEffect, useState } from 'react'
import { useRecoilState } from 'recoil'
import { languageState, testListState } from 'store/store'
import "./TestList.css"
import LANGUAGE from 'constants/language'

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

  useEffect(() => {
    fetchTestList()
  }, [])

  return (
    <>
      <BaseSubtitle text="예문 목록" />
      <BaseCard className="flex">
        <ul className="block flex-1 w-full">
          {testList?.map(testData => {
            const { id, text, difficulty, language } = testData
            return <TestListItem id={id} text={text} difficulty={difficulty} />
          })}
        </ul>
      </BaseCard>
      <ReactPaginate
        containerClassName="paginate-container"
        pageClassName="paginate-page"
        activeClassName="paginate-active"
        previousClassName="paginate-prev"
        nextClassName="paginate-next" />
    </>
  )
}

export default TestList
