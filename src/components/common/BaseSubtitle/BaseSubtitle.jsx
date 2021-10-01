import React from 'react'

const BaseSubtitle = ({ text, className: cn }) => {
  return (
    <h2 className={[`mb-4 font-semibold text-xl`, cn].join(" ")}>
      {text}
    </h2>
  )
}

export default BaseSubtitle
