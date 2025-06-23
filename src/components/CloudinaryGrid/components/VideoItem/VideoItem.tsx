import { FC, useState, useRef } from "react";
import ReactPlayer from "react-player";
import { Play, Pause } from "lucide-react";

import { VideoItemProps } from "./VideoItem.types";

export const VideoItem: FC<VideoItemProps> = ({ video, index }) => {
  const [playingIndex, setPlayingIndex] = useState<number | null>(null);
  const playerRefs = useRef<Array<ReactPlayer | null>>([]);

  const togglePlay = (index: number) => {
    setPlayingIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="relative aspect-[9/16] bg-gray-100 rounded-2xl overflow-hidden group shadow-lg">
      <ReactPlayer
        ref={(ref) => {
          playerRefs.current[index] = ref;
        }}
        url={video.secure_url}
        playing={playingIndex === index}
        loop
        playsinline
        width="100%"
        height="100%"
        controls={false}
        className="!absolute !top-0 !left-0"
      />

      {/* Overlay and button */}
      <div
        onClick={() => togglePlay(index)}
        className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-opacity opacity-100 flex items-center justify-center"
      >
        <button
          className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-white/90 hover:bg-white/95 transition-transform group-hover:scale-110"
          aria-label="Play video"
        >
          {playingIndex === index ? (
            <Pause className="w-6 h-6 text-gray-900" />
          ) : (
            <Play className="w-6 h-6 text-gray-900" />
          )}
        </button>
      </div>
    </div>
  );
};

export default VideoItem;

// Note: This component is designed to be used within a grid layout, where it receives `video`, `loading`, and `index` props.
// Ensure that the parent component handles the fetching of video data and passes the appropriate props to this component.

// Usage example in a parent component:
// <VideoItem video={video} loading={loading} index={index} />
// Make sure to import this component in the parent file where you want to use it.

// Note: The `loading` prop is used to conditionally render a loading message while the video data is being fetched.
// The `index` prop is used to manage the playing state of each video in a list.
