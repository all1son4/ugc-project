"use client";

import { useEffect, useState } from "react";
import { MediaGrid } from "@/components";
import { googleService } from "@/services/"; // импортируем твой сервис

type VideoFile = {
  id: string;
  name: string;
  mimeType: string;
};

export default function Home() {
  const [media, setMedia] = useState<VideoFile[]>([]);

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
      <video controls className="w-full max-w-xs rounded-2xl shadow-lg">
        <source
          src="https://res.cloudinary.com/daeqbpscy/video/upload/v1750409980/dsonugcqfzeqe0d51aee.mov"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
