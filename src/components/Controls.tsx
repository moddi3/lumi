import React from 'react';
import { useVideoStore } from '../store/useVideoStore';
import { Monitor, Clock } from 'lucide-react';

export const Controls: React.FC = () => {
  const { quality, setQuality, sleepTimer, setSleepTimer } = useVideoStore();

  const handleSleepTimer = (minutes: number) => {
    setSleepTimer(minutes);
    if (minutes) {
      setTimeout(() => {
        window.close();
      }, minutes * 60 * 1000);
    }
  };

  return (
    <div className="p-4 border-t border-gray-200">
      <div className="flex items-center justify-between">
        <div className="flex flex-col px-4 gap-4">
          <div className="flex items-center gap-2">
            <Monitor size={20} />
            <select
              value={quality}
              onChange={(e) => setQuality(e.target.value)}
              className="bg-transparent border border-gray-300 rounded px-2 py-1"
            >
              <option value="4k">4K</option>
              <option value="8k">8K</option>
              <option value="hd">HD</option>
            </select>
          </div>
          <div className="flex items-center gap-2">
            <Clock size={20} />
            <select
              value={sleepTimer || ''}
              onChange={(e) => handleSleepTimer(Number(e.target.value))}
              className="bg-transparent border border-gray-300 rounded px-2 py-1"
            >
              <option value="">Sleep Timer</option>
              <option value="30">30 minutes</option>
              <option value="60">1 hour</option>
              <option value="120">2 hours</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};