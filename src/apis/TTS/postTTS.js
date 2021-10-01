import axios from "axios"
import { googleTTSBaseUrl } from "constants/apiBaseUrl";
import { setTTSRequestBody } from "./TTSBodySetter";

export const TTSAxiosInstance = axios.create({
  baseURL: googleTTSBaseUrl,
  timeout: 1000,
});

export const requestTTSApi = async (config) => {
  const TTSRequest = await axios.post(googleTTSBaseUrl, setTTSRequestBody(config))
  return TTSRequest
}