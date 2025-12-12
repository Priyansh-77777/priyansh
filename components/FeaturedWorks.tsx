import React from 'react';
import { Gamepad2, Trophy, Smartphone, ArrowUpRight, Globe } from 'lucide-react';
import { FEATURED_WORKS } from '../constants';

const FeaturedWorks: React.FC = () => {
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

          {/* Right Column - Typographic List */}
          <div className="flex-1">
            {FEATURED_WORKS.map((work, idx) => (
              <div 
                key={idx}
                className="group relative border-b border-line last:border-b-0 transition-colors hover:bg-white"
              >
                <div className="p-8 md:p-12 flex flex-col md:flex-row md:items-center justify-between gap-8">
                  {/* Title & Category */}
                  <div className="md:w-1/2">
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-graphite mb-3">
                       <span className="w-2 h-2 rounded-full bg-accent opacity-0 group-hover:opacity-100 transition-opacity"></span>
                       {work.category}
                    </div>
                    <h3 className="text-4xl md:text-5xl font-serif text-ink group-hover:translate-x-2 transition-transform duration-300">
                      {work.title}
                    </h3>
                  </div>

                  {/* Metadata & Action */}
                  <div className="md:w-1/2 flex flex-col md:items-end gap-6">
                    <div className="flex flex-wrap gap-2 md:justify-end">
                      {work.tags.map((tag, tIdx) => (
                        <span 
                          key={tIdx} 
                          className="px-3 py-1 text-[10px] font-bold uppercase tracking-wider border border-line rounded-full text-graphite bg-zinc-50 group-hover:bg-white group-hover:border-graphite transition-colors"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex flex-wrap justify-end gap-3 opacity-80 group-hover:opacity-100 transition-opacity">
                      {work.webLink && (
                        <a 
                          href={work.webLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest border border-ink text-white bg-ink px-4 py-2 hover:bg-zinc-800 transition-colors"
                        >
                          Try Web App <Globe className="w-3 h-3" />
                        </a>
                      )}
                      {(work.androidLink || work.iosLink) && (
                         <div className="flex gap-2">
                             {work.androidLink && (
                                <a 
                                  href={work.androidLink} 
                                  className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest border border-line text-ink px-4 py-2 hover:border-ink transition-colors"
                                >
                                  Android <Smartphone className="w-3 h-3" />
                                </a>
                             )}
                             {work.iosLink && (
                                <a 
                                  href={work.iosLink} 
                                  className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest border border-line text-ink px-4 py-2 hover:border-ink transition-colors"
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
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default FeaturedWorks;