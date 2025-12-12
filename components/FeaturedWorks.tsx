import React, { useState, useEffect, useRef } from 'react';
import { Smartphone, Globe, X, ArrowUpRight } from 'lucide-react';
import { FEATURED_WORKS } from '../constants';

const ParallaxImage = ({ src, alt }: { src: string; alt: string }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current || !imgRef.current) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Check visibility
      if (rect.top < windowHeight && rect.bottom > 0) {
        const centerPosition = windowHeight / 2;
        const elementCenter = rect.top + rect.height / 2;
        const distanceFromCenter = elementCenter - centerPosition;
        
        // Gentle parallax
        const translateY = distanceFromCenter * -0.08;
        // Moderate scaling to ensure edges are covered but minimizing blur
        imgRef.current.style.transform = `scale(1.08) translateY(${translateY}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="w-full h-full aspect-square overflow-hidden rounded-xl relative bg-zinc-100 shadow-sm border border-line group-hover:shadow-md transition-shadow duration-500"
    >
      {src ? (
        <img 
          ref={imgRef}
          src={src} 
          alt={alt}
          className="w-full h-full object-cover transition-all duration-700 ease-out will-change-transform grayscale group-hover:grayscale-0"
          style={{ 
            transform: 'scale(1.08)',
            backfaceVisibility: 'hidden',
            WebkitFontSmoothing: 'subpixel-antialiased'
          }} 
          loading="lazy"
          onError={(e) => {
            // Fallback for broken images to a subtle placeholder
            (e.target as HTMLImageElement).style.display = 'none';
            (e.target as HTMLImageElement).parentElement?.classList.add('flex', 'items-center', 'justify-center', 'bg-zinc-200');
            (e.target as HTMLImageElement).parentElement!.innerHTML = `<span class="text-zinc-400 text-xs uppercase font-bold tracking-widest text-center px-4">${alt}</span>`;
          }}
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center text-zinc-300">
           <span className="text-xs uppercase font-bold tracking-widest">No Preview</span>
        </div>
      )}
      
      {/* Texture Overlay */}
      <div className="absolute inset-0 bg-ink/5 mix-blend-multiply group-hover:bg-transparent transition-all duration-500 pointer-events-none" />
    </div>
  );
};

const FeaturedWorks: React.FC = () => {
  const [activeWebPreview, setActiveWebPreview] = useState<string | null>(null);

  const handleWebPreview = (e: React.MouseEvent, url: string) => {
    e.preventDefault();
    setActiveWebPreview(url);
  };

  return (
    <section id="works" className="bg-paper border-b border-line">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col lg:flex-row">
          
          {/* Left Column - Sticky Header */}
          <div className="lg:w-[350px] lg:shrink-0 lg:border-r border-line p-6 md:p-12 lg:h-screen lg:sticky lg:top-0 flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-graphite mb-4 block">02 — Portfolio</span>
              <h2 className="text-5xl font-serif font-medium text-ink mb-6 leading-none">
                Selected <br /> <span className="italic text-graphite">Works</span>
              </h2>
              <p className="text-graphite text-sm leading-relaxed max-w-xs">
                From casual mobile hits to AI-native narratives.
              </p>
            </div>
            
            <div className="hidden lg:block text-xs text-graphite font-mono">
              SCROLL TO EXPLORE ↓
            </div>
          </div>

          {/* Right Column - Content List */}
          <div className="flex-1">
            {FEATURED_WORKS.map((work, idx) => (
              <div 
                key={idx}
                className="group border-b border-line last:border-b-0 transition-colors hover:bg-white"
              >
                <div className="p-8 md:p-12">
                  {/* Editorial Layout: Image Side | Content Side */}
                  <div className={`flex flex-col gap-8 md:gap-12 ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                    
                    {/* Image Column */}
                    <div className="md:w-5/12 shrink-0">
                      <ParallaxImage src={work.image || ""} alt={work.title} />
                    </div>

                    {/* Content Column */}
                    <div className="flex-1 flex flex-col justify-center">
                      <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-graphite mb-3 group-hover:text-ink transition-colors duration-300">
                         <span className="w-2 h-2 rounded-full bg-accent opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"></span>
                         <span className="transition-transform duration-300 group-hover:translate-x-1">{work.category}</span>
                      </div>
                      
                      <h3 className="text-4xl lg:text-5xl font-serif text-ink mb-4 leading-[1.1] group-hover:translate-x-1 transition-transform duration-500">
                        {work.title}
                      </h3>
                      
                      {work.description && (
                        <p className="text-graphite leading-relaxed text-sm md:text-base mb-6 group-hover:text-ink transition-colors duration-500">
                          {work.description}
                        </p>
                      )}

                      <div className="flex flex-wrap gap-2 mb-8">
                        {work.tags.map((tag, tIdx) => (
                          <span 
                            key={tIdx} 
                            className="px-2 py-1 text-[10px] font-bold uppercase tracking-wider border border-line rounded-md text-graphite bg-zinc-50/50 transition-all duration-500 group-hover:border-ink group-hover:bg-white group-hover:text-ink group-hover:shadow-sm"
                            style={{ transitionDelay: `${tIdx * 50}ms` }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex flex-wrap gap-3 mt-auto">
                        {work.webLink && (
                          <a 
                            href={work.webLink}
                            onClick={(e) => handleWebPreview(e, work.webLink!)}
                            className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest bg-ink text-white px-5 py-3 rounded-full hover:bg-zinc-800 hover:shadow-lg transition-all active:scale-95"
                          >
                            Try Web App <Globe className="w-3 h-3" />
                          </a>
                        )}
                        {(work.androidLink || work.iosLink) && (
                           <div className="flex gap-2">
                               {work.androidLink && (
                                  <a 
                                    href={work.androidLink} 
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest border border-line text-ink px-4 py-3 rounded-full hover:border-ink hover:bg-white hover:shadow-md transition-all active:scale-95"
                                  >
                                    Android <Smartphone className="w-3 h-3" />
                                  </a>
                               )}
                               {work.iosLink && (
                                  <a 
                                    href={work.iosLink} 
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest border border-line text-ink px-4 py-3 rounded-full hover:border-ink hover:bg-white hover:shadow-md transition-all active:scale-95"
                                  >
                                    iOS <Smartphone className="w-3 h-3" />
                                  </a>
                               )}
                           </div>
                        )}
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Web Preview Modal */}
      {activeWebPreview && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 md:p-8 animate-in fade-in duration-200">
          <div className="bg-paper w-full max-w-6xl h-[85vh] rounded-xl overflow-hidden relative shadow-2xl flex flex-col border border-line">
             <div className="flex justify-between items-center p-4 border-b border-line bg-paper">
                <div className="flex items-center gap-2">
                  <Globe className="w-4 h-4 text-accent" />
                  <span className="font-bold text-ink text-sm uppercase tracking-widest">Live Preview</span>
                </div>
                <button 
                  onClick={() => setActiveWebPreview(null)} 
                  className="p-2 hover:bg-line/50 rounded-full transition-colors text-ink"
                >
                  <X className="w-5 h-5" />
                </button>
             </div>
             <iframe 
                src={activeWebPreview} 
                className="w-full h-full bg-white" 
                title="Preview" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
             />
          </div>
        </div>
      )}
    </section>
  );
};

export default FeaturedWorks;