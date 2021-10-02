import axios from "axios"
import { SpeechBaseUrlEn, SpeechBaseUrlKo } from "constants/apiBaseUrl";
import { setSpeechRequestBody } from "./SpeechBodySetter";

export const requestSpeechAPI = async (config) => {
  let SpeechEvalRequest = {}
  if (config.language === "korean") {
    SpeechEvalRequest = await axios.post(SpeechBaseUrlKo, setSpeechRequestBody(config))
  }
  if (config.language === "english") {
    SpeechEvalRequest = await axios.post(SpeechBaseUrlEn, setSpeechRequestBody(config))
  }
  return SpeechEvalRequest
}