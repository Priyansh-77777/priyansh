import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { CASE_STUDIES } from '../constants';

const CaseStudies: React.FC = () => {
  return (
    <section id="case-studies" className="bg-paper border-b border-line">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-4">
          
          {/* Section Title Sidebar */}
          <div className="p-6 md:p-12 border-b lg:border-b-0 lg:border-r border-line lg:sticky lg:top-24 h-fit">
            <span className="text-xs font-bold uppercase tracking-widest text-graphite mb-4 block">03 — Insights</span>
            <h2 className="text-4xl font-serif font-medium text-ink mb-6">
              Case <br /> <span className="italic text-graphite">Studies</span>
            </h2>
            <p className="text-graphite text-sm leading-relaxed">
              Deep dives into problem solving, product strategy, and data analysis.
            </p>
          </div>

          {/* Content Area */}
          <div className="lg:col-span-3 bg-white">
            <div className="grid grid-cols-1 md:grid-cols-2">
              {CASE_STUDIES.map((study, idx) => (
                <div 
                  key={idx} 
                  className={`p-12 border-b border-line ${idx % 2 === 0 ? 'md:border-r' : ''} group hover:bg-zinc-50 transition-colors flex flex-col justify-between`}
                >
                  <div>
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-graphite mb-4">
                        <span className="w-2 h-2 rounded-full bg-accent"></span>
                        {study.category}
                    </div>
                    <h3 className="text-2xl font-serif text-ink mb-4 leading-tight group-hover:underline decoration-1 underline-offset-4">
                      {study.title}
                    </h3>
                    <p className="text-graphite text-sm leading-relaxed mb-8">
                      {study.summary}
                    </p>
                  </div>
                  
                  <a href={study.link} className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-ink group-hover:gap-3 transition-all">
                    Read Analysis <ArrowUpRight className="w-3 h-3" />
                  </a>
                </div>
              ))}
              
              {/* Placeholder for "Coming Soon" or more */}
              <div className="p-12 border-b border-line flex items-center justify-center bg-zinc-50/50">
                <span className="text-xs font-mono text-zinc-400">More studies coming soon...</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CaseStudies;