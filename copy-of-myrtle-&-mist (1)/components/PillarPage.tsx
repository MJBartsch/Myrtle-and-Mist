
import React, { useEffect } from 'react';
import { useTheme } from './ThemeContext';
import { PILLAR_CONTENT, ARTICLES } from '../constants';
import Breadcrumbs from './Breadcrumbs';
import { ViewType } from '../types';

interface PillarPageProps {
  onNavigate: (view: ViewType, id?: string) => void;
}

const PillarPage: React.FC<PillarPageProps> = ({ onNavigate }) => {
  const { theme } = useTheme();
  const data = PILLAR_CONTENT[theme];

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [theme]);

  const handleScrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className={`min-h-screen pt-24 pb-20 theme-transition ${
      theme === 'myrtle' ? 'bg-myrtle-bg' : 'bg-mist-bg'
    }`}>
      {/* Animated Hero Header */}
      <div className={`relative h-[400px] w-full overflow-hidden mb-12 theme-transition ${
        theme === 'myrtle' ? 'bg-gradient-to-br from-[#f0fdf4] via-[#fffbeb] to-[#fff7ed]' : 'bg-[#020617]'
      }`}>
        
        {/* Dynamic Background Elements */}
        {theme === 'myrtle' ? (
          <>
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-lime-300/20 rounded-full mix-blend-multiply filter blur-[50px] animate-blob"></div>
            <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-200/30 rounded-full mix-blend-multiply filter blur-[60px] animate-blob" style={{ animationDelay: '2s' }}></div>
            <div className="absolute -bottom-32 left-1/3 w-96 h-96 bg-emerald-100/40 rounded-full mix-blend-multiply filter blur-[50px] animate-blob" style={{ animationDelay: '4s' }}></div>
             <div className="absolute inset-0 opacity-[0.05] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay"></div>
          </>
        ) : (
          <>
            <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[80%] bg-indigo-900/20 rounded-full mix-blend-screen filter blur-[100px] animate-blob"></div>
            <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[80%] bg-violet-900/20 rounded-full mix-blend-screen filter blur-[100px] animate-blob" style={{ animationDelay: '4s' }}></div>
            <div className="absolute top-[20%] right-[20%] w-72 h-72 bg-slate-800/20 rounded-full mix-blend-screen filter blur-[80px] animate-blob" style={{ animationDelay: '2s' }}></div>
            <div className="absolute inset-0 opacity-[0.04] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
          </>
        )}

        {/* Texture Overlay */}
        <div className={`absolute inset-0 z-0 opacity-10 mix-blend-overlay theme-transition ${theme === 'mist' ? 'grayscale' : ''}`}>
           <img src={data.image} alt="" className="w-full h-full object-cover" />
        </div>

        {/* Content Container */}
        <div className="absolute inset-0 z-20 flex items-center justify-center">
          <div className="text-center px-4 max-w-4xl">
            <span className={`block text-xs md:text-sm font-bold uppercase tracking-[0.3em] mb-6 animate-fade-in-up ${
               theme === 'myrtle' ? 'text-myrtle-accent' : 'text-mist-accent'
            }`}>
              The Comprehensive Guide
            </span>
            <h1 className={`text-5xl md:text-7xl mb-6 animate-fade-in-up ${
              theme === 'myrtle' ? 'font-geo font-black text-myrtle-text' : 'font-serif text-white'
            }`} style={{ animationDelay: '100ms' }}>
              {data.title}
            </h1>
            <p className={`text-lg md:text-xl font-light max-w-2xl mx-auto animate-fade-in-up ${
              theme === 'myrtle' ? 'text-gray-600' : 'text-gray-300'
            }`} style={{ animationDelay: '200ms' }}>
              {data.subtitle}
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs view="pillar" onNavigate={(v) => onNavigate(v)} />
        
        {/* --- CATEGORY NAVIGATION GRID --- */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mb-20">
          {data.categories.map((cat, idx) => (
            <button
              key={cat.id}
              onClick={() => handleScrollToSection(cat.id)}
              className={`group p-6 rounded-xl border text-left transition-all duration-300 transform hover:-translate-y-1 ${
                theme === 'myrtle' 
                  ? 'bg-white border-gray-100 shadow-sm hover:shadow-lg hover:border-myrtle-accent/30' 
                  : 'bg-white/5 border-white/10 backdrop-blur-md hover:bg-white/10 hover:border-mist-accent/30'
              }`}
            >
              <div className={`mb-4 w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                theme === 'myrtle' ? 'bg-green-50 text-myrtle-accent group-hover:bg-myrtle-accent group-hover:text-white' : 'bg-white/5 text-mist-accent group-hover:bg-mist-accent group-hover:text-mist-bg'
              }`}>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={cat.icon} />
                </svg>
              </div>
              <h3 className={`text-lg font-bold mb-1 ${
                theme === 'myrtle' ? 'font-geo text-myrtle-text' : 'font-serif text-white'
              }`}>
                {cat.title}
              </h3>
              <p className={`text-xs opacity-70 ${
                theme === 'myrtle' ? 'text-gray-600' : 'text-gray-400'
              }`}>
                {cat.description}
              </p>
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Main Content Area */}
          <main className="lg:col-span-4 space-y-24">
             <div className={`text-lg leading-relaxed mb-12 text-center max-w-3xl mx-auto ${
               theme === 'myrtle' ? 'text-gray-700' : 'text-gray-300'
             }`}>
               <p className="font-serif text-2xl mb-8 italic opacity-80">"{data.description}"</p>
             </div>

             {/* --- CATEGORY SECTIONS --- */}
             {data.categories.map((cat) => {
               // Find Content for this category
               const catArticles = ARTICLES.filter(a => a.category === cat.id);
               const catSections = data.sections.filter(s => s.categoryId === cat.id);

               return (
                 <section key={cat.id} id={cat.id} className="scroll-mt-32">
                   
                   {/* Category Header */}
                   <div className={`flex items-end justify-between border-b pb-4 mb-8 ${
                     theme === 'myrtle' ? 'border-gray-200' : 'border-white/10'
                   }`}>
                      <div>
                        <h2 className={`text-3xl md:text-4xl mb-2 ${
                          theme === 'myrtle' ? 'font-geo font-bold text-myrtle-text' : 'font-serif text-mist-text'
                        }`}>
                          {cat.title}
                        </h2>
                        <p className={`text-sm ${
                           theme === 'myrtle' ? 'text-gray-500' : 'text-gray-400'
                        }`}>
                           {cat.description}
                        </p>
                      </div>
                      <button className={`hidden sm:block text-xs font-bold uppercase tracking-widest ${
                         theme === 'myrtle' ? 'text-myrtle-accent' : 'text-mist-accent'
                      }`}>
                         View All
                      </button>
                   </div>
                   
                   {/* Articles Grid */}
                   <div className="grid md:grid-cols-2 gap-8 mb-8">
                      {catArticles.length > 0 ? catArticles.map(article => {
                         const content = article[theme];
                         return (
                            <div 
                              key={article.id} 
                              onClick={() => onNavigate('article', article.id)}
                              className={`group cursor-pointer rounded-lg overflow-hidden border theme-transition flex flex-col ${
                                theme === 'myrtle' 
                                  ? 'bg-white border-gray-100 hover:shadow-lg' 
                                  : 'bg-white/5 border-white/10 hover:bg-white/10'
                              }`}
                            >
                              <div className="h-48 overflow-hidden relative">
                                <img src={article.image} alt={content.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                              </div>
                              <div className="p-6 flex-grow">
                                <h3 className={`text-xl font-bold mb-2 ${
                                   theme === 'myrtle' ? 'font-geo text-myrtle-text' : 'font-serif text-white'
                                }`}>
                                   {content.title}
                                </h3>
                                <p className={`text-sm line-clamp-3 mb-4 ${
                                   theme === 'myrtle' ? 'text-gray-600' : 'text-gray-400'
                                }`}>
                                   {content.excerpt}
                                </p>
                                <span className={`text-xs font-bold uppercase tracking-wider ${
                                   theme === 'myrtle' ? 'text-myrtle-accent' : 'text-mist-accent'
                                }`}>
                                   Read Guide &rarr;
                                </span>
                              </div>
                            </div>
                         );
                      }) : (
                        <div className={`col-span-2 py-8 text-center italic opacity-60 ${
                          theme === 'myrtle' ? 'text-gray-500' : 'text-gray-400'
                        }`}>
                          More guides coming soon to {cat.title}.
                        </div>
                      )}
                   </div>

                   {/* Featured Pillar Content ("Deep Dives") */}
                   {catSections.length > 0 && (
                     <div className={`rounded-xl p-8 ${
                        theme === 'myrtle' ? 'bg-myrtle-secondary' : 'bg-mist-secondary border border-mist-accent/10'
                     }`}>
                        <span className={`text-xs font-bold uppercase tracking-widest mb-4 block ${
                           theme === 'myrtle' ? 'text-myrtle-accent' : 'text-mist-accent'
                        }`}>
                           Deep Dive
                        </span>
                        {catSections.map(section => (
                           <div key={section.id}>
                              <h3 className={`text-2xl font-bold mb-4 ${
                                 theme === 'myrtle' ? 'text-myrtle-text' : 'text-white'
                              }`}>
                                 {section.title}
                              </h3>
                              <div 
                                 className={`prose prose-sm max-w-none mb-6 ${
                                   theme === 'myrtle' ? 'text-gray-700' : 'prose-invert text-gray-300'
                                 }`}
                                 dangerouslySetInnerHTML={{ __html: section.content }}
                               />
                           </div>
                        ))}
                     </div>
                   )}
                 </section>
               );
             })}

             {/* Embedded Conversion CTA */}
             <div className={`mt-20 p-12 text-center rounded-lg border theme-transition ${
               theme === 'myrtle' 
                 ? 'bg-gradient-to-br from-green-50 to-white border-green-100' 
                 : 'bg-gradient-to-br from-gray-900 to-black border-white/10'
             }`}>
                <h4 className={`text-2xl font-bold mb-4 ${
                  theme === 'myrtle' ? 'font-geo text-myrtle-text' : 'font-serif text-white'
                }`}>
                  {theme === 'myrtle' ? 'Need a personal consultation?' : 'Deepen your practice'}
                </h4>
                <p className={`text-base mb-8 max-w-xl mx-auto ${
                   theme === 'myrtle' ? 'text-gray-600' : 'text-gray-400'
                }`}>
                  {theme === 'myrtle' ? 'Our AI botanical specialist can help diagnose specific issues with your collection.' : 'Chat with the Mist Muse to find the perfect ritual for your current state of mind.'}
                </p>
                <button className={`px-8 py-4 text-xs font-bold uppercase tracking-widest rounded-sm transition-all hover:-translate-y-1 ${
                  theme === 'myrtle' 
                    ? 'bg-myrtle-accent text-white hover:bg-myrtle-text' 
                    : 'bg-mist-accent text-mist-bg hover:bg-white'
                }`}>
                  Chat Now
                </button>
             </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default PillarPage;
