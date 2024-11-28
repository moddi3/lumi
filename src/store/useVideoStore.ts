import { create } from 'zustand';
import { Video, Category, PlaylistItem } from '../types/video';
import { videoData } from '../data/videos';

interface VideoStore {
  videos: Video[];
  currentVideo: Video | null;
  currentCategory: Category | null;
  playlist: PlaylistItem[];
  isFullscreen: boolean;
  isMuted: boolean;
  quality: string;
  sleepTimer: number | null;
  setCurrentVideo: (video: Video | null) => void;
  setCategory: (category: Category | null) => void;
  toggleFullscreen: () => void;
  toggleMute: () => void;
  setQuality: (quality: string) => void;
  addToPlaylist: (video: Video) => void;
  removeFromPlaylist: (id: string) => void;
  setSleepTimer: (minutes: number | null) => void;
}

export const useVideoStore = create<VideoStore>((set) => ({
  videos: videoData,
  currentVideo: null,
  currentCategory: null,
  playlist: [],
  isFullscreen: false,
  isMuted: false,
  quality: '4k',
  sleepTimer: null,
  setCurrentVideo: (video) => set({ currentVideo: video }),
  setCategory: (category) => set({ currentCategory: category }),
  toggleFullscreen: () => set((state) => ({ isFullscreen: !state.isFullscreen })),
  toggleMute: () => set((state) => ({ isMuted: !state.isMuted })),
  setQuality: (quality) => set({ quality }),
  addToPlaylist: (video) => set((state) => ({
    playlist: [...state.playlist, { id: crypto.randomUUID(), videoId: video.id }]
  })),
  removeFromPlaylist: (id) => set((state) => ({
    playlist: state.playlist.filter(item => item.id !== id)
  })),
  setSleepTimer: (minutes) => set({ sleepTimer: minutes })
}));