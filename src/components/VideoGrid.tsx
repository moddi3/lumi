import React from 'react';
import { useVideoStore } from '../store/useVideoStore';
import { Clock, Plus } from 'lucide-react';

export const VideoGrid: React.FC = () => {
  const { videos, currentCategory, setCurrentVideo, addToPlaylist } = useVideoStore();

  const filteredVideos = currentCategory
    ? videos.filter(video => video.category === currentCategory)
    : videos;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {filteredVideos.map((video) => (
        <div
          key={video.id}
          className="group relative rounded-lg overflow-hidden shadow-lg"
        >
          <img
            src={video.thumbnail}
            alt={video.title}
            className="w-full h-48 object-cover"
          />
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity">
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <h3 className="text-white font-medium mb-2">{video.title}</h3>
              <div className="flex items-center justify-between">
                <div className="flex items-center text-gray-300">
                  <Clock size={16} className="mr-1" />
                  <span>{Math.floor(video.duration / 3600)}h {Math.floor((video.duration % 3600) / 60)}m</span>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => setCurrentVideo(video)}
                    className="px-3 py-1 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition-colors"
                  >
                    Play
                  </button>
                  <button
                    onClick={() => addToPlaylist(video)}
                    className="p-1 text-white hover:text-indigo-400 transition-colors"
                  >
                    <Plus size={20} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};