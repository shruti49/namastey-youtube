export const GOOGLE_API_KEY = "AIzaSyCE7N9j9SnjehVZ37KRx6WObUZF4Xiwuhw";

export const YOUTUBE_BASE_API = "https://youtube.googleapis.com/youtube/v3";
// eslint-disable-next-line no-unused-vars
export const YOUTUBE_VIDEOS_API =
  YOUTUBE_BASE_API +
  "/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&maxResults=50&key=" +
  GOOGLE_API_KEY;

export const YOUTUBE_SEARCH_API =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const LIVE_CHAT_COUNT = 15;

export const YOUTUBE_SEARCH_RESULTS_API =
  YOUTUBE_BASE_API + "/search?part=snippet&maxResults=25&q=";

