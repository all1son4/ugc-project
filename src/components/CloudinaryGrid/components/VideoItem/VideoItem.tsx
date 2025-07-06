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
    <div className="w-full">
      <div className="relative pt-[177.77%] rounded-xl overflow-hidden shadow-md group w-full max-w-full">
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
          className="absolute top-0 left-0 w-full h-full"
        />
        <div
          onClick={() => togglePlay(index)}
          className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center cursor-pointer"
        >
          <button
            className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-white/80 hover:bg-white transition-transform duration-200 group-hover:scale-105 shadow-sm"
            aria-label="Play video"
          >
            {playingIndex === index ? (
              <Pause className="w-6 h-6 text-black" />
            ) : (
              <Play className="w-6 h-6 text-black" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoItem;
