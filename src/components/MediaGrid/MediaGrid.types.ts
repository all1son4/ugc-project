export type VideoFile = {
  id: string;
  name: string;
  mimeType: string;
  thumbnailLink?: string;
};

export interface MediaGridProps {
  content: VideoFile[];
}
