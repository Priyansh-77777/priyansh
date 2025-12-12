import React from 'react';
import { EXPERIENCE_DATA } from '../constants';
import { Calendar, Building2 } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 px-6 md:px-12 bg-slate-950">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">Professional Journey</h2>
        
        <div className="relative space-y-12">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-slate-800 -translate-x-1/2 hidden md:block"></div>

          {EXPERIENCE_DATA.map((job, index) => (
            <div key={index} className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
              
              {/* Timeline Dot */}
              <div className="absolute left-4 md:left-1/2 top-0 w-4 h-4 bg-blue-500 rounded-full border-4 border-slate-950 -translate-x-1/2 z-10 hidden md:block shadow-[0_0_15px_rgba(59,130,246,0.5)]"></div>

              {/* Content Card */}
              <div className="flex-1">
                <div className={`bg-slate-900 border border-slate-800 p-6 rounded-xl hover:border-slate-600 transition-all group ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                  
                  <div className={`flex flex-col mb-4 ${index % 2 === 0 ? 'md:items-start' : 'md:items-end'}`}>
                    <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">{job.role}</h3>
                    <div className="flex items-center gap-4 text-slate-400 text-sm mt-1">
                      <span className="flex items-center gap-1"><Building2 className="w-3 h-3" /> {job.company}</span>
                      <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {job.period}</span>
                    </div>
                  </div>

                  <p className="text-slate-300 mb-6 text-sm leading-relaxed">{job.description}</p>

                  <div className={`space-y-3 ${index % 2 === 0 ? 'md:items-start' : 'md:items-end'} flex flex-col`}>
                    {job.achievements.map((point, i) => (
                      <div key={i} className="flex gap-3 text-slate-400 text-sm group-hover:text-slate-300 transition-colors">
                        <span className="text-blue-500 mt-1.5 min-w-[6px] h-[6px] rounded-full bg-blue-500 block"></span>
                        <span className={index % 2 !== 0 ? 'md:text-right w-full' : 'text-left'}>{point}</span>
                      </div>
                    ))}
                  </div>

                  {job.metrics && (
                    <div className={`mt-6 grid grid-cols-3 gap-2 ${index % 2 === 0 ? '' : 'md:ml-auto md:mr-0'}`}>
                      {job.metrics.map((m, i) => (
                        <div key={i} className="bg-slate-800 rounded p-2 text-center border border-slate-700">
                          <div className="text-xs text-slate-500 mb-1">{m.label}</div>
                          <div className="text-green-400 font-bold text-sm">{m.value}</div>
                        </div>
                      ))}
                    </div>
                  )}

                  <div className={`flex flex-wrap gap-2 mt-6 ${index % 2 !== 0 ? 'md:justify-end' : ''}`}>
                    {job.tags.map((tag, t) => (
                      <span key={t} className="text-xs font-mono px-2 py-1 bg-slate-800 text-blue-300 rounded border border-slate-700">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Spacer for the other side of the timeline */}
              <div className="flex-1 hidden md:block"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;