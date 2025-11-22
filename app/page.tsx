'use client';
import { useMode } from '@/app/context/ModeContext';
You should update this file as well to use a relative path, just to be absolutely safe.


http://googleusercontent.com/immersive_entry_chip/1

**Why did this happen?**
When you use `@/`, Next.js looks at the `tsconfig.json` file to see where `@` points (usually the root). If Vercel generates a fresh `tsconfig.json` during build (as seen in your logs: `We detected TypeScript... and created a tsconfig.json`), it might not have set up the `@` alias correctly by default. Using relative paths (`./` and `../`) bypasses this configuration entirely and always works.

Update `app/page.tsx` and `components/ModeToggle.tsx` with the code blocks above, push to GitHub, and you should see the successful build!
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Leaf, Wind, Moon, Sparkles, ArrowRight, Mail, Sun, Droplets, Eye, Scroll } from 'lucide-react';
import { useMode } from '@/app/context/ModeContext';
import ModeToggle from '@/components/ModeToggle';

export default function Home() {
  const { mode } = useMode();
  const targetRef = useRef<HTMLDivElement>(null);
  
  // Fix for Framer Motion type conflict
  const MotionDiv = motion.div as any;
  const MotionH1 = motion.h1 as any;
  const MotionP = motion.p as any;

  // --- CONTENT DATA ---
  // This is where your USP lives: Data changes based on mode
  const heroContent = {
    botanical: {
      tagline: "Botanical Care & Science",
      title: "Cultivate Your\nGarden",
      desc: "Expert guides on soil composition, humidity requirements, and propagation techniques for the modern grower."
    },
    esoteric: {
      tagline: "Spiritual Wisdom & Ritual",
      title: "Cultivate Your\nSpirit",
      desc: "Discover the metaphysical properties of plants, lunar alignment, and how to turn your home into a sacred sanctuary."
    }
  };

  const features = {
    botanical: [
      { icon: Leaf, title: "Plant Biology", desc: "Understanding photosynthesis and growth cycles." },
      { icon: Droplets, title: "Watering Rhythms", desc: "Mastering the hydration needs of tropical flora." },
      { icon: Sun, title: "Light Mapping", desc: "Optimizing lux levels for variegated foliage." }
    ],
    esoteric: [
      { icon: Eye, title: "Green Witchcraft", desc: "Harnessing the protective energy of foliage." },
      { icon: Moon, title: "Lunar Rituals", desc: "Aligning your growth with the phases of the moon." },
      { icon: Scroll, title: "Ancient Wisdom", desc: "Folklore and mythology of the plant kingdom." }
    ]
  };

  return (
    <main className={`relative min-h-screen text-mist-100 overflow-hidden transition-colors duration-1000 ${
      mode === 'botanical' ? 'selection:bg-myrtle-500' : 'selection:bg-esoteric-500'
    }`}>
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 border-b border-mist-500/10 bg-opacity-50 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="text-2xl font-serif text-spirit-gold tracking-wider">
            Myrtle & Mist
          </div>
          
          <div className="flex items-center gap-8">
            <div className="hidden md:flex space-x-8 text-sm tracking-widest uppercase text-mist-200">
              {['Shop', 'Journal', 'About'].map((item) => (
                <a key={item} href="#" className="hover:text-spirit-gold transition-colors">
                  {item}
                </a>
              ))}
            </div>
            {/* The Magic Switch */}
            <ModeToggle />
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section ref={targetRef} className="relative h-screen flex items-center justify-center z-10">
        <div className="text-center px-4 max-w-4xl mx-auto">
          
          {/* Animated Text Switcher */}
          <MotionDiv
            key={mode} // Key change triggers re-animation
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-spirit-gold text-sm tracking-[0.3em] uppercase block mb-4">
              {heroContent[mode].tagline}
            </span>
            <MotionH1 
              className={`text-5xl md:text-7xl lg:text-8xl font-serif mb-8 leading-tight text-transparent bg-clip-text bg-gradient-to-b ${
                mode === 'botanical' ? 'from-mist-100 to-myrtle-500' : 'from-mist-100 to-esoteric-500'
              }`}
            >
              {heroContent[mode].title.split('\n').map((line, i) => (
                <React.Fragment key={i}>{line}<br/></React.Fragment>
              ))}
            </MotionH1>
            <MotionP className="text-mist-200 text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto mb-10">
              {heroContent[mode].desc}
            </MotionP>
          </MotionDiv>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-spirit-gold/10 border border-spirit-gold/20 hover:bg-spirit-gold/20 text-spirit-gold rounded-full transition-all duration-300 backdrop-blur-sm flex items-center justify-center gap-2 group">
              {mode === 'botanical' ? 'Browse Plants' : 'Explore Rituals'}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* Dual-Mode Features Section */}
      <section className={`relative z-10 py-32 transition-colors duration-1000 ${
        mode === 'botanical' 
          ? 'bg-gradient-to-b from-transparent to-myrtle-900' 
          : 'bg-gradient-to-b from-transparent to-esoteric-900'
      }`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features[mode].map((feature, index) => (
              <MotionDiv
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`p-8 rounded-2xl border backdrop-blur-sm transition-all duration-500 group ${
                  mode === 'botanical' 
                    ? 'bg-myrtle-800/30 border-mist-500/10 hover:bg-myrtle-800/50' 
                    : 'bg-esoteric-800/30 border-spirit-gold/10 hover:bg-esoteric-800/50'
                }`}
              >
                <div className="w-12 h-12 rounded-full bg-spirit-gold/10 flex items-center justify-center mb-6 text-spirit-gold">
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-serif text-mist-100 mb-4">{feature.title}</h3>
                <p className="text-mist-200 leading-relaxed font-light">{feature.desc}</p>
              </MotionDiv>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
