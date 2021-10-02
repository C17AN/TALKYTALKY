import { ETRIAPIKey } from "constants/apiBaseUrl";

export const setSpeechRequestBody = (config) => ({
  access_key: ETRIAPIKey,
  argument: {
    script: config.text,
    language_code: config.language,
    audio: config.audio
  }
})