import React from 'react';
import { useTheme } from './ThemeContext';
import { ViewType } from '../types';

interface BreadcrumbsProps {
  view: ViewType;
  title?: string;
  onNavigate: (view: ViewType) => void;
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ view, title, onNavigate }) => {
  const { theme } = useTheme();

  const baseClasses = "text-xs font-bold uppercase tracking-widest flex items-center space-x-2";
  const textClass = theme === 'myrtle' ? 'text-myrtle-text/60 hover:text-myrtle-accent' : 'text-gray-500 hover:text-mist-accent';
  const activeClass = theme === 'myrtle' ? 'text-myrtle-text' : 'text-mist-text';

  return (
    <nav className="mb-8">
      <div className={baseClasses}>
        <button onClick={() => onNavigate('home')} className={`transition-colors ${textClass}`}>
          Home
        </button>
        
        <span className="opacity-40">/</span>
        
        {view === 'pillar' && (
          <span className={activeClass}>Guide</span>
        )}

        {view === 'article' && (
          <>
             <button onClick={() => onNavigate('pillar')} className={`transition-colors ${textClass}`}>
              Guide
            </button>
            <span className="opacity-40">/</span>
            <span className={`truncate max-w-[200px] ${activeClass}`}>{title || 'Article'}</span>
          </>
        )}
      </div>
    </nav>
  );
};

export default Breadcrumbs;
