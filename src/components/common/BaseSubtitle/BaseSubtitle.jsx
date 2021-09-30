import React from 'react'

const BaseSubtitle = ({ text, className }) => {
  return (
    <h2 className={[`mb-4 font-semibold text-xl`, className].join(' ')}>
      {text}
    </h2>
  )
}

export default BaseSubtitle
