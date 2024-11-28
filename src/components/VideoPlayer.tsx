import React from 'react';
import ReactPlayer from 'react-player';
import { useVideoStore } from '../store/useVideoStore';
import { Maximize2, Minimize2, Volume2, VolumeX } from 'lucide-react';

export const VideoPlayer: React.FC = () => {
  const { currentVideo, isFullscreen, isMuted, quality, toggleFullscreen, toggleMute } = useVideoStore();

  if (!currentVideo) return null;

  return (
    <div className="relative w-full h-full">
      <ReactPlayer
        url={`https://www.youtube.com/watch?v=${currentVideo.youtubeId}`}
        width="100%"
        height="100%"
        playing
        loop
        muted={isMuted}
        controls={false}
        config={{
          youtube: {
            playerVars: {
              modestbranding: 1,
              rel: 0,
              quality: quality.toLowerCase()
            }
          }
        }}
      />
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/50 to-transparent">
        <div className="flex items-center justify-between">
          <h2 className="text-white text-lg font-medium">{currentVideo.title}</h2>
          <div className="flex gap-4">
            <button
              onClick={toggleMute}
              className="text-white hover:text-gray-200 transition-colors"
            >
              {isMuted ? <VolumeX size={24} /> : <Volume2 size={24} />}
            </button>
            <button
              onClick={toggleFullscreen}
              className="text-white hover:text-gray-200 transition-colors"
            >
              {isFullscreen ? <Minimize2 size={24} /> : <Maximize2 size={24} />}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};