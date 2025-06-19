import axiosInstance from "./instance";

export const getGoogleDriveMedia = async () => {
  const response = await axiosInstance.get("/api/media");
  return response.data;
};

const googleService = {
  getGoogleDriveMedia,
};

export default googleService;
