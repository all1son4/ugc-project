// components/CloudinaryGrid.tsx

import { useEffect, useState } from "react";
import axios from "axios";
import { Spinner } from "@/components";
import VideoItem from "./components/VideoItem";
import { CloudinaryResource } from "@/types";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

export const CloudinaryGrid = () => {
  const [videos, setVideos] = useState<CloudinaryResource[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchVideos() {
      try {
        const response =
          await axios.get<CloudinaryResource[]>("/api/cloudinary");
        const videoResources = response.data.filter(
          (file) => file.resource_type === "video",
        );
        setVideos(videoResources);
      } catch (error) {
        console.error("Ошибка загрузки видео:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchVideos();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[50vh]">
        <Spinner size={84} />
      </div>
    );
  }

  return (
    <>
      {/* 📱 Слайдер только на мобильных */}
      <div className="sm:hidden w-full px-4">
        <Swiper spaceBetween={32} slidesPerView="auto" className="w-full">
          {videos.map((video, index) => (
            <SwiperSlide
              key={video.public_id}
              className="w-[85%] max-w-[85%] !h-auto"
            >
              <VideoItem video={video} index={index} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* 🖥️ Сетка на больших экранах */}
      <div className="hidden sm:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 w-full">
        {videos.map((video, index) => (
          <div key={video.public_id} className="min-w-0">
            <VideoItem video={video} index={index} />
          </div>
        ))}
      </div>
    </>
  );
};

export default CloudinaryGrid;
