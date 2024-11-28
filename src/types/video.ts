export interface Video {
  id: string;
  title: string;
  category: Category;
  thumbnail: string;
  duration: number;
  quality: VideoQuality[];
  youtubeId: string;
}

export type Category = 
  | 'natural-elements'
  | 'aquatic-scenes'
  | 'urban-environments'
  | 'nature-landscapes';

export type VideoQuality = '4k' | '8k' | 'hd';

export interface PlaylistItem {
  id: string;
  videoId: string;
}