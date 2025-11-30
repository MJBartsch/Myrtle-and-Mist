

import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import About from './components/About';
import WellnessChat from './components/WellnessChat';
import Footer from './components/Footer';
import ContentHub from './components/ContentHub';
import PillarPage from './components/PillarPage';
import ArticlePage from './components/ArticlePage';
import MeditationTool from './components/MeditationTool';
import MoonSync from './components/MoonSync';
import LightArchitect from './components/LightArchitect';
import { ThemeProvider, useTheme } from './components/ThemeContext';
import ThemeToggle from './components/ThemeToggle';
import { ViewState, ViewType } from './types';

const AppContent: React.FC = () => {
  const { theme } = useTheme();
  const [view, setView] = useState<ViewState>({ type: 'home' });

  const handleNavigate = (type: ViewType, id?: string) => {
    setView({ type, id });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  return (
    <div className={`min-h-screen flex flex-col theme-transition ${
      theme === 'myrtle' ? 'bg-myrtle-bg font-sans' : 'bg-mist-bg font-sans'
    }`}>
      <Header onNavigate={(v) => handleNavigate(v)} />
      
      <main className="flex-grow">
        {view.type === 'home' && (
          <>
            <Hero onNavigate={(v) => handleNavigate(v)} />
            <ContentHub onNavigate={(v, id) => handleNavigate(v, id)} />
            
            {/* Interactive Tools Section */}
            <div className="space-y-0">
               <MoonSync />
               <MeditationTool />
               <LightArchitect onNavigate={(v, id) => handleNavigate(v, id)} />
            </div>

            <About />
            <ProductGrid />
            <WellnessChat />
          </>
        )}

        {view.type === 'pillar' && (
          <PillarPage onNavigate={(v, id) => handleNavigate(v, id)} />
        )}

        {view.type === 'article' && view.id && (
          <ArticlePage articleId={view.id} onNavigate={(v, id) => handleNavigate(v, id)} />
        )}
      </main>

      <Footer />
      <ThemeToggle />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
};

export default App;
