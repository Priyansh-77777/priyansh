import React from 'react';
import { EXPERIENCE_DATA } from '../constants';
import { Calendar, Building2 } from 'lucide-react';

const Experience: React.FC = () => {
  // Helper to parse text and bold numbers (integers, percentages, multipliers, etc.)
  const highlightNumbers = (text: string) => {
    // Matches patterns like: 100, 12x, 14%, 4,000, 50+, 8-12%
    // The splitting logic with capturing group allows us to interleave text and matches
    const parts = text.split(/(\d+(?:[.,-]\d+)?(?:%|x|\+|k|m|K|M)?)/g);
    
    return parts.map((part, i) => {
      if (/^\d+(?:[.,-]\d+)?(?:%|x|\+|k|m|K|M)?$/.test(part)) {
        return <strong key={i} className="font-bold text-ink">{part}</strong>;
      }
      return <span key={i}>{part}</span>;
    });
  };

  return (
    <section id="experience" className="bg-paper border-b border-line">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-4">
           
           {/* Header */}
           <div className="p-6 md:p-12 border-b lg:border-b-0 lg:border-r border-line lg:sticky lg:top-24 h-fit">
            <span className="text-xs font-bold uppercase tracking-widest text-graphite mb-4 block">04 — Resume</span>
            <h2 className="text-4xl font-serif font-medium text-ink mb-6">
              Professional <br /> <span className="italic text-graphite">Journey</span>
            </h2>
          </div>

          <div className="lg:col-span-3">
            {EXPERIENCE_DATA.map((job, index) => (
              <div key={index} className="group border-b border-line last:border-b-0 p-8 md:p-12 hover:bg-white transition-colors">
                
                <div className="flex flex-col md:flex-row md:items-start justify-between mb-6 gap-4">
                  <div>
                    <h3 className="text-2xl font-serif text-ink mb-1">{job.role}</h3>
                    <div className="flex items-center gap-2 text-graphite font-medium">
                      <Building2 className="w-4 h-4" />
                      {job.company}
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-sm font-mono text-graphite bg-zinc-100 px-3 py-1 rounded">
                    <Calendar className="w-3 h-3" /> {job.period}
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                  <div className="md:col-span-2">
                    <p className="text-graphite mb-6 leading-relaxed">
                      {highlightNumbers(job.description)}
                    </p>
                    <ul className="space-y-3">
                      {job.achievements.map((point, i) => (
                        <li key={i} className="flex gap-3 text-sm text-ink items-start leading-relaxed">
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent shrink-0"></span>
                          <span>{highlightNumbers(point)}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="md:col-span-1 border-l border-line pl-0 md:pl-8 pt-6 md:pt-0 border-t md:border-t-0">
                    <h4 className="text-xs font-bold uppercase tracking-widest text-graphite mb-4">Key Metrics</h4>
                    {job.metrics ? (
                      <div className="space-y-4">
                        {job.metrics.map((m, i) => (
                          <div key={i}>
                            <div className="text-xs text-graphite mb-1">{m.label}</div>
                            <div className="text-xl font-serif font-bold text-ink">{m.value}</div>
                            <div className="text-[10px] text-zinc-400 font-mono">{m.detail}</div>
                          </div>
                        ))}
                      </div>
                    ) : (
                       <p className="text-xs text-zinc-400 italic">Qualitative impact focus.</p>
                    )}
                    
                    <div className="mt-8 flex flex-wrap gap-2">
                      {job.tags.map((tag, t) => (
                        <span key={t} className="text-[10px] font-bold uppercase tracking-wider text-graphite bg-zinc-100 px-2 py-1 rounded">
                          {tag}
                        </span>
                      ))}
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

export default Experience;