import React from 'react';
import { useVideoStore } from '../store/useVideoStore';
import { Flame, Waves, Building2, Mountain } from 'lucide-react';
import { Category } from '../types/video';
import { clsx } from 'clsx';

const categoryIcons = {
  'natural-elements': Flame,
  'aquatic-scenes': Waves,
  'urban-environments': Building2,
  'nature-landscapes': Mountain
};

const categoryNames = {
  'natural-elements': 'Natural Elements',
  'aquatic-scenes': 'Aquatic Scenes',
  'urban-environments': 'Urban Environments',
  'nature-landscapes': 'Nature Landscapes'
};

export const CategoryList: React.FC = () => {
  const { currentCategory, setCategory } = useVideoStore();

  return (
    <div className="flex flex-col gap-2 p-4">
      {(Object.keys(categoryIcons) as Category[]).map((category) => {
        const Icon = categoryIcons[category];
        return (
          <button
            key={category}
            onClick={() => setCategory(category)}
            className={clsx(
              'flex items-center gap-3 px-4 py-3 rounded-lg transition-colors',
              currentCategory === category
                ? 'bg-indigo-600 text-white'
                : 'hover:bg-gray-100'
            )}
          >
            <Icon size={20} />
            <span>{categoryNames[category]}</span>
          </button>
        );
      })}
    </div>
  );
};