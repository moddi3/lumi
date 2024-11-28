import React from 'react';
import { VideoPlayer } from './components/VideoPlayer';
import { CategoryList } from './components/CategoryList';
import { VideoGrid } from './components/VideoGrid';
import { Controls } from './components/Controls';
import { useVideoStore } from './store/useVideoStore';

function App() {
  const { currentVideo } = useVideoStore();

  return (
    <div className="flex h-screen bg-gray-50">
      <aside className="w-64 bg-white border-r border-gray-200 flex flex-col">
        <div className="p-4 border-b border-gray-200">
          <h1 className="text-xl font-bold text-gray-900">Ambient Stream</h1>
        </div>
        <CategoryList />
        <Controls />
      </aside>
      
      <main className="flex-1 flex flex-col">
        {currentVideo ? (
          <div className="flex-1 bg-black">
            <VideoPlayer />
          </div>
        ) : (
          <div className="flex-1 overflow-auto">
            <VideoGrid />
          </div>
        )}
      </main>
    </div>
  );
}

export default App;