import React, { FC, useState } from "react";
import { MediaGridProps } from "./MediaGrid.types";
import MediaCard from "./components/MediaCard";

export const MediaGrid: FC<MediaGridProps> = ({ content }) => {
  const [playingId, setPlayingId] = useState<string | null>(null);
  const [playedOnceIds, setPlayedOnceIds] = useState<Set<string>>(new Set());

  const handlePlay = (id: string | null) => {
    setPlayingId(id);
    if (id) {
      setPlayedOnceIds((prev) => new Set(prev).add(id));
    }
  };

  return (
    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      {content.map((item) => (
        <MediaCard
          key={item.id}
          item={item}
          isPlaying={playingId === item.id}
          playedOnce={playedOnceIds.has(item.id)}
          onPlay={handlePlay}
        />
      ))}
    </div>
  );
};

export default MediaGrid;
