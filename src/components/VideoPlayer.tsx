import { memo } from "react";

function VideoPlayer({ url }: { url: string }) {
  return <video src={url} controls style={{ width: 480, height: 320 }} />;
}

export default memo(VideoPlayer);
