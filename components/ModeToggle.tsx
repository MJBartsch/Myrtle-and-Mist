'use client';

import { useMode } from '../app/context/ModeContext';
import { motion } from 'framer-motion';
import { Leaf, Sparkles } from 'lucide-react';

export default function ModeToggle() {
  const { mode, toggleMode } = useMode();

  return (
    <button
      onClick={toggleMode}
      className={`relative w-16 h-8 rounded-full p-1 transition-colors duration-500 border ${
        mode === 'botanical' 
          ? 'bg-myrtle-800 border-mist-500/30' 
          : 'bg-esoteric-800 border-spirit-gold/30'
      }`}
    >
      {/* The Sliding Knob */}
      <motion.div
        className="absolute top-1 w-6 h-6 rounded-full bg-spirit-gold flex items-center justify-center text-myrtle-900 shadow-lg z-10"
        initial={false}
        animate={{
          left: mode === 'botanical' ? '4px' : 'calc(100% - 28px)',
        }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
      >
        {mode === 'botanical' ? (
          <Leaf className="w-3 h-3" />
        ) : (
          <Sparkles className="w-3 h-3" />
        )}
      </motion.div>
      
      {/* Background Labels (Optional subtle indicators) */}
      <div className="absolute inset-0 flex justify-between items-center px-2 text-[8px] font-bold uppercase tracking-wider text-mist-500/50 pointer-events-none">
        <span>Bio</span>
        <span>Soul</span>
      </div>
    </button>
  );
}
