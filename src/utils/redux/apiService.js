import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { YOUTUBE_BASE_API, GOOGLE_API_KEY } from "../constants";

export const videosApi = createApi({
  reducerPath: "videosApi",
  baseQuery: fetchBaseQuery({ baseUrl: YOUTUBE_BASE_API }),
  endpoints: (builder) => ({
    getVideoById: builder.query({
      query: (videoId) =>
        `/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${GOOGLE_API_KEY}`,
    }),
  }),
});

export const { useGetVideoByIdQuery } = videosApi;
