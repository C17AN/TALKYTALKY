export const setScoreTextHelper = (score) => {
  switch (true) {
    case score <= 20:
      return { text: "매우 미흡", className: "bad" }
    case score <= 40:
      return { text: "미흡", className: "inadequate" }
    case score <= 60:
      return { text: "보통", className: "average" }
    case score <= 80:
      return { text: "우수", className: "good" }
    case score <= 100:
      return { text: "매우 우수", className: "excellent" }
    default:
      return
  }
}
