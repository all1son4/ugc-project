"use client";

import React, { memo } from "react";
import ReactPlayer from "react-player";
import { useInView } from "react-intersection-observer";
import { VideoFile } from "../../MediaGrid.types";

export const MediaCard = memo(
  ({
    item,
    isPlaying,
    playedOnce,
    onPlay,
  }: {
    item: VideoFile;
    isPlaying: boolean;
    playedOnce: boolean;
    onPlay: (id: string | null) => void;
  }) => {
    const { ref, inView } = useInView({
      triggerOnce: true,
      rootMargin: "200px",
    });

    return (
      <div
        ref={ref}
        className="rounded-2xl overflow-hidden shadow-md bg-white relative"
      >
        <div className="aspect-video bg-black relative">
          {inView ? (
            <ReactPlayer
              url={`/api/media/stream?id=${item.id}`}
              playing={isPlaying}
              controls={playedOnce}
              width="100%"
              height="100%"
              config={{
                file: {
                  attributes: {
                    preload: "none",
                    poster: item.thumbnailLink,
                    playsInline: true,
                  },
                },
              }}
              onPlay={() => onPlay(item.id)}
              onPause={() => onPlay(null)}
              onEnded={() => onPlay(null)}
            />
          ) : (
            <div className="w-full h-full bg-black" />
          )}

          {/* Постер с блюром, показываем только если видео ещё не воспроизводилось */}
          {!playedOnce && inView && (
            <div
              className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center cursor-pointer"
              style={{
                backgroundImage: `url(${item.thumbnailLink})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                filter: "blur(4px) brightness(0.7)",
                zIndex: 10,
              }}
              onClick={() => onPlay(item.id)}
              aria-label={`Play ${item.name}`}
            >
              <button
                className="text-white text-6xl pointer-events-auto"
                aria-label={`Play ${item.name}`}
              >
                ▶
              </button>
            </div>
          )}

          {/* Кнопка play поверх постера, если видео не играет и не было воспроизведено */}
          {!isPlaying && !playedOnce && inView && (
            <button
              onClick={() => onPlay(item.id)}
              className="absolute inset-0 flex items-center justify-center bg-transparent text-white text-4xl cursor-pointer z-20"
              aria-label={`Play ${item.name}`}
            >
              ▶
            </button>
          )}
        </div>
        <div className="p-4 bg-white z-15 relative">
          <h3 className="text-sm font-medium truncate">{item.name}</h3>
        </div>
      </div>
    );
  },
);

MediaCard.displayName = "MediaCard";

export default MediaCard;
