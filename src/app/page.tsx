"use client";

import { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import dynamic from "next/dynamic";

import { MediaGrid } from "@/components";
import { googleService } from "@/services/"; // импортируем твой сервис

type VideoFile = {
  id: string;
  name: string;
  mimeType: string;
};

export default function Home() {
  const [media, setMedia] = useState<VideoFile[]>([]);

  const ClientOnlyPlayer = dynamic(() => import("react-player"), {
    ssr: false,
  });

  useEffect(() => {
    const fetchMedia = async () => {
      try {
        const data = await googleService.getGoogleDriveMedia(); // вызываем функцию из сервиса
        console.log(data);
        setMedia(data);
      } catch (error) {
        console.error("Ошибка при загрузке видео:", error);
      }
    };

    fetchMedia();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Видео из Google Диска</h1>
      {media.length > 0 ? (
        <MediaGrid content={media} />
      ) : (
        <p>Загрузка видео...</p>
      )}
      <div className="w-full max-w-sm aspect-[9/16] rounded-2xl shadow-lg overflow-hidden">
        <ClientOnlyPlayer
          url="https://res.cloudinary.com/daeqbpscy/video/upload/v1750409980/dsonugcqfzeqe0d51aee.mov"
          controls={false}
          playing={true}
          width="100%"
          height="100%"
          light={`data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='720' height='1280' viewBox='0 0 720 1280'><style>text{font-family:sans-serif;fill:white;}</style><rect width='100%' height='100%' fill='black'/><circle cx='360' cy='640' r='60' fill='white'/><polygon points='345,610 390,640 345,670' fill='black'/><text x='50%' y='740' text-anchor='middle' font-size='28'>Нажмите для воспроизведения</text></svg>`}
        />
      </div>
    </div>
  );
}
