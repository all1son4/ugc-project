"use client";

import { useEffect, useState } from "react";
import { MediaGrid } from "@/components";

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
        const res = await fetch("/api/media"); // обращаемся к API-роуту
        const data = await res.json();
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
