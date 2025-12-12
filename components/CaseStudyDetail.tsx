import React, { useEffect, useState } from 'react';
import { ArrowLeft, Clock, Target, Users, Map, ZoomIn } from 'lucide-react';
import { CaseStudyDetail } from '../types';

interface Props {
  data: CaseStudyDetail;
  onBack: () => void;
}

const CaseStudyDetailView: React.FC<Props> = ({ data, onBack }) => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scroll = `${totalScroll / windowHeight}`;
      setScrollProgress(Number(scroll));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Helper to parse basic bold formatting **text**
  const parseContent = (text: string) => {
    if (!text) return null;
    const parts = text.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, index) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={index} className="font-bold text-ink">{part.slice(2, -2)}</strong>;
      }
      return <span key={index}>{part}</span>;
    });
  };

  return (
    <div className="bg-paper min-h-screen pb-20 animate-in fade-in duration-500">
      
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 h-1 bg-ink z-[60]" style={{ width: `${scrollProgress * 100}%` }}></div>

      {/* Navigation */}
      <div className="fixed top-6 left-6 z-[50]">
        <button 
          onClick={onBack}
          className="group flex items-center gap-2 bg-white/90 backdrop-blur border border-line px-4 py-2 rounded-full hover:border-ink transition-colors shadow-sm"
        >
          <ArrowLeft className="w-4 h-4 text-ink group-hover:-translate-x-1 transition-transform" />
          <span className="text-xs font-bold uppercase tracking-widest text-ink">Back to Portfolio</span>
        </button>
      </div>

      <div className="max-w-[800px] mx-auto pt-32 px-6 md:px-12">
        
        {/* Header Section */}
        <div className="mb-16 border-b border-line pb-12">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-2 h-2 rounded-full bg-accent"></span>
            <span className="text-xs font-bold uppercase tracking-widest text-graphite">{data.category}</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-ink mb-8 leading-[1.1]">
            {data.title}
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 border-t border-line pt-6">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-zinc-400 mb-2">
                <Users className="w-3 h-3" /> Role
              </div>
              <p className="text-sm font-medium text-ink">{data.role}</p>
            </div>
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-zinc-400 mb-2">
                <Target className="w-3 h-3" /> Focus
              </div>
              <p className="text-sm font-medium text-ink">{data.focus}</p>
            </div>
             <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-zinc-400 mb-2">
                <Map className="w-3 h-3" /> Scope
              </div>
              <p className="text-sm font-medium text-ink">{data.scope}</p>
            </div>
          </div>
        </div>

        {/* Content Sections */}
        <div className="space-y-12">
          {data.sections.map((section, idx) => {
            switch (section.type) {
              case 'text':
                return (
                  <div key={idx}>
                    {section.heading && (
                      <h3 className="text-xl font-bold font-serif text-ink mb-4">{section.heading}</h3>
                    )}
                    <p className="text-lg text-graphite leading-relaxed font-light">
                      {parseContent(section.content || '')}
                    </p>
                  </div>
                );
              
              case 'list':
                return (
                  <div key={idx} className="bg-white border-l-4 border-accent p-8 my-8 shadow-sm">
                    {section.heading && (
                      <h3 className="text-lg font-bold uppercase tracking-widest text-ink mb-6">{section.heading}</h3>
                    )}
                    <ul className="space-y-4">
                      {section.items?.map((item, i) => (
                        <li key={i} className="flex gap-4 items-start text-graphite">
                           <span className="mt-2 w-1.5 h-1.5 rounded-full bg-accent shrink-0"></span>
                           <span className="text-lg leading-relaxed">{parseContent(item)}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );

              case 'segments':
                return (
                  <div key={idx} className="my-12">
                    {section.heading && (
                      <h3 className="text-xl font-bold font-serif text-ink mb-8 border-b border-line pb-4">{section.heading}</h3>
                    )}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {section.items?.map((item, i) => {
                         // Parse "**Title**: Description"
                         const parts = item.split(':');
                         const title = parts[0].replace(/\*\*/g, '').trim();
                         const desc = parts.slice(1).join(':').trim();
                         
                         return (
                           <div key={i} className="bg-zinc-50 p-6 border border-line rounded-sm hover:border-ink hover:shadow-md transition-all">
                             <h4 className="font-bold text-ink mb-3 uppercase tracking-wide text-xs border-b border-zinc-200 pb-2">{title}</h4>
                             <p className="text-sm text-graphite leading-relaxed">{desc}</p>
                           </div>
                         );
                      })}
                    </div>
                  </div>
                );

              case 'highlight':
                return (
                  <div key={idx} className="bg-zinc-900 text-white p-8 md:p-10 my-10 rounded-sm">
                    {section.heading && (
                      <div className="flex items-center gap-3 mb-4 text-accent">
                        <Clock className="w-5 h-5" />
                        <h3 className="text-sm font-bold uppercase tracking-widest">{section.heading}</h3>
                      </div>
                    )}
                    <p className="text-xl md:text-2xl font-serif leading-relaxed opacity-90">
                      {parseContent(section.content || '')}
                    </p>
                  </div>
                );
              
              case 'metric-grid':
                 return (
                  <div key={idx} className="border-y border-line py-12 my-12">
                     {section.heading && (
                      <h3 className="text-center text-xs font-bold uppercase tracking-widest text-graphite mb-8">{section.heading}</h3>
                    )}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                      {section.items?.map((item, i) => {
                         const [val, label] = item.split(':');
                         return (
                           <div key={i}>
                              <div className="text-3xl font-serif font-bold text-ink mb-2">{label || item}</div>
                              {label && <div className="text-xs uppercase tracking-widest text-zinc-500">{val}</div>}
                           </div>
                         )
                      })}
                    </div>
                  </div>
                 );
              
              case 'image':
                return (
                  <div key={idx} className="my-12">
                    <figure className="w-full">
                      <div className="border border-line p-2 bg-white rounded-sm shadow-sm">
                        <img 
                          src={section.src} 
                          alt={section.alt || "Case Study Image"} 
                          className="w-full h-auto object-cover"
                        />
                      </div>
                      {section.caption && (
                        <figcaption className="text-center text-xs text-graphite mt-3 italic font-serif">
                          {section.caption}
                        </figcaption>
                      )}
                    </figure>
                  </div>
                );
              
              default:
                return null;
            }
          })}
        </div>

        {/* Footer */}
        <div className="mt-20 pt-10 border-t border-line text-center">
           <p className="italic text-graphite mb-6">End of Analysis</p>
           <button 
              onClick={onBack}
              className="text-sm font-bold uppercase tracking-widest text-ink hover:text-accent transition-colors"
           >
             ← Return to Home
           </button>
        </div>

      </div>
    </div>
  );
};

export default CaseStudyDetailView;