import { useEffect, useState } from "react";
import axios from "axios";

import { Spinner } from "@/components";
import VideoItem from "./components/VideoItem";

type CloudinaryResource = {
  public_id: string;
  format: string;
  url: string;
  secure_url: string;
  resource_type: string;
};

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

  if (loading)
    return (
      <div className="flex items-center justify-center h-screen">
        <Spinner size={84} />
      </div>
    );

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {videos.map((video, index) => (
        <VideoItem video={video} index={index} key={video.public_id} />
      ))}
    </div>
  );
};

export default CloudinaryGrid;
