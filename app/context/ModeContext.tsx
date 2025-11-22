'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

type Mode = 'botanical' | 'esoteric';

interface ModeContextType {
  mode: Mode;
  toggleMode: () => void;
}

const ModeContext = createContext<ModeContextType | undefined>(undefined);

export function ModeProvider({ children }: { children: React.ReactNode }) {
  const [mode, setMode] = useState<Mode>('botanical');

  const toggleMode = () => {
    setMode((prev) => (prev === 'botanical' ? 'esoteric' : 'botanical'));
  };

  return (
    <ModeContext.Provider value={{ mode, toggleMode }}>
      <div className={`transition-colors duration-1000 ${mode === 'botanical' ? 'bg-myrtle-900' : 'bg-esoteric-900'}`}>
        {children}
      </div>
    </ModeContext.Provider>
  );
}

export function useMode() {
  const context = useContext(ModeContext);
  if (context === undefined) {
    throw new Error('useMode must be used within a ModeProvider');
  }
  return context;
}
