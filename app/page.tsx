'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Leaf, Wind, Moon, Sparkles, ArrowRight, Mail } from 'lucide-react';

export default function Home() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  // Cast motion components to any to avoid React 19 strict type conflicts
  const MotionDiv = motion.div as any;
  const MotionA = motion.a as any;

  return (
    <main className="relative bg-myrtle-900 min-h-screen text-mist-100 overflow-hidden selection:bg-myrtle-500 selection:text-white">
      
      {/* Animated Background Mist Layers */}
      <div className="fixed inset-0 z-0">
        <div className="mist-layer" />
        <div className="mist-layer mist-layer-2" />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 border-b border-mist-500/10 bg-myrtle-900/50 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <MotionDiv 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-serif text-spirit-gold tracking-wider"
          >
            Myrtle & Mist
          </MotionDiv>
          <div className="hidden md:flex space-x-8 text-sm tracking-widest uppercase text-mist-200">
            {['Shop', 'Journal', 'Rituals', 'About'].map((item, i) => (
              <MotionA
                key={item}
                href={`#${item.toLowerCase()}`}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="hover:text-spirit-gold transition-colors cursor-pointer"
              >
                {item}
              </MotionA>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section ref={targetRef} className="relative h-screen flex items-center justify-center z-10">
        <MotionDiv 
          style={{ opacity, scale }}
          className="text-center px-4 max-w-4xl mx-auto"
        >
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-spirit-gold text-sm tracking-[0.3em] uppercase block mb-4">
              Botanical & Esoteric
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif mb-8 leading-tight text-transparent bg-clip-text bg-gradient-to-b from-mist-100 to-mist-500">
              Where Plants<br />Meet Spirit
            </h1>
            <p className="text-mist-200 text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto mb-10">
              Cultivating a sacred connection between the earth beneath us 
              and the mystery within us.
            </p>
          </MotionDiv>

          <MotionDiv
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button className="px-8 py-4 bg-spirit-gold/10 border border-spirit-gold/20 hover:bg-spirit-gold/20 text-spirit-gold rounded-full transition-all duration-300 backdrop-blur-sm flex items-center justify-center gap-2 group">
              Explore the Shop
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </MotionDiv>
        </MotionDiv>
      </section>

      {/* The Three Pillars Section */}
      <section className="relative z-10 py-32 bg-gradient-to-b from-transparent to-myrtle-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                icon: Leaf, 
                title: "Botanical Wisdom", 
                desc: "Rare houseplants and expert care guides grounded in biology and experience." 
              },
              { 
                icon: Moon, 
                title: "Lunar Rituals", 
                desc: "Aligning your growth with the phases of the moon and seasonal cycles." 
              },
              { 
                icon: Wind, 
                title: "Sacred Spaces", 
                desc: "Curating environments that breathe, heal, and inspire tranquility." 
              }
            ].map((feature, index) => (
              <MotionDiv
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="p-8 rounded-2xl bg-myrtle-800/30 border border-mist-500/10 backdrop-blur-sm hover:bg-myrtle-800/50 transition-all duration-500 group"
              >
                <div className="w-12 h-12 rounded-full bg-spirit-gold/10 flex items-center justify-center mb-6 text-spirit-gold group-hover:scale-110 transition-transform duration-500">
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-serif text-mist-100 mb-4">{feature.title}</h3>
                <p className="text-mist-200 leading-relaxed font-light">{feature.desc}</p>
              </MotionDiv>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Content / "The Mist" Section */}
      <section className="relative z-10 py-24 overflow-hidden">
        <div className="absolute inset-0 bg-myrtle-800/20" />
        <div className="max-w-7xl mx-auto px-6 relative">
          <MotionDiv 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row items-center gap-16"
          >
            <div className="w-full md:w-1/2">
              <div className="aspect-[4/5] rounded-t-full bg-gradient-to-b from-myrtle-500/20 to-transparent border border-mist-500/10 relative overflow-hidden group">
                {/* Placeholder for an image */}
                <div className="absolute inset-0 flex items-center justify-center text-mist-500/30 group-hover:scale-105 transition-transform duration-700">
                  <Sparkles className="w-24 h-24 opacity-20" />
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 space-y-8">
              <h2 className="text-4xl md:text-5xl font-serif text-spirit-gold">
                The Weekly Vlog
              </h2>
              <p className="text-xl text-mist-200 font-light leading-relaxed">
                Join us every Sunday as we tend to the greenhouse, explore herbal remedies, and discuss the spiritual lessons found in nature's quietest moments.
              </p>
              <button className="text-mist-100 border-b border-spirit-gold pb-1 hover:text-spirit-gold transition-colors">
                Watch the latest episode
              </button>
            </div>
          </MotionDiv>
        </div>
      </section>

      {/* Newsletter */}
      <section className="relative z-10 py-32">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <MotionDiv
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="p-12 rounded-3xl bg-gradient-to-br from-myrtle-800/50 to-myrtle-900/50 border border-mist-500/10 backdrop-blur-md"
          >
            <Mail className="w-8 h-8 mx-auto mb-6 text-spirit-gold" />
            <h2 className="text-3xl font-serif mb-4">Join the Circle</h2>
            <p className="text-mist-200 mb-8 font-light">
              Receive monthly insights on plant care, moon phases, and shop updates.
            </p>
            <form className="flex flex-col sm:flex-row gap-4">
              <input 
                type="email" 
                placeholder="Your email address"
                className="flex-1 bg-myrtle-900/50 border border-mist-500/20 rounded-full px-6 py-3 focus:outline-none focus:border-spirit-gold/50 transition-colors placeholder:text-mist-500/50"
              />
              <button className="bg-spirit-gold text-myrtle-900 font-medium px-8 py-3 rounded-full hover:bg-mist-100 transition-colors duration-300">
                Subscribe
              </button>
            </form>
          </MotionDiv>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-mist-500/10 py-12 bg-myrtle-900">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-2xl font-serif text-spirit-gold">Myrtle & Mist</div>
          <div className="text-mist-500 text-sm">
            © 2025 Myrtle & Mist. Cultivated with intention.
          </div>
        </div>
      </footer>
    </main>
  );
}
