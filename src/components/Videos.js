import { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import useVideoList from "../hooks/useVideoList";
import Video from "./Video";

export default function Videos() {
  const [page, setPage] = useState(1);
  const { loading, error, videos, hasMore } = useVideoList(page);

  return (
    <>
      {videos.length > 0 && (
        <InfiniteScroll
          dataLength={videos.length}
          hasMore={hasMore}
          loader={<p>Loading...</p>}
          next={() => setPage(page + 8)}
          endMessage={<h4>No more video to show!</h4>}
        >
          {videos.map((video, i) => (
            <Video
              key={video.youtubeID}
              id={video.youtubeID}
              title={video.title}
              noq={video.noq}
            />
          ))}
        </InfiniteScroll>
      )}

      {!loading && !videos.length && <p>No data found!</p>}
      {error && <p>There was an error!</p>}
      {loading && <p>Loading...</p>}
    </>
  );
}
