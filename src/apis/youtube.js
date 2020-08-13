import axios from "axios";
import { YOUTUBE_API_KEY } from "../config";

export const baseParams = {
  part: "snippet",
  maxResults: 5,
  type: "video",
  key: YOUTUBE_API_KEY,
};

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
});
