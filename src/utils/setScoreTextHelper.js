export const setScoreTextHelper = (score) => {
  switch (true) {
    case score <= 20:
      return "매우 미흡"
    case score <= 40:
      return "미흡"
    case score <= 60:
      return "보통"
    case score <= 80:
      return "우수"
    case score <= 100:
      return "매우 우수"
    default:
      return
  }
}
