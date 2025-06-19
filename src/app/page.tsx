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

  return <MediaGrid content={media} />;
}
