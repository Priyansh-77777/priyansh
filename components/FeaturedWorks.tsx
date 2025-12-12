import React from 'react';
import { Gamepad2, Trophy, Smartphone, ArrowUpRight } from 'lucide-react';
import { FEATURED_WORKS } from '../constants';

const FeaturedWorks: React.FC = () => {
  const getIcon = (category: string) => {
    if (category.toLowerCase().includes('sport')) return <Trophy className="w-8 h-8 text-yellow-400" />;
    if (category.toLowerCase().includes('mobile')) return <Smartphone className="w-8 h-8 text-blue-400" />;
    return <Gamepad2 className="w-8 h-8 text-purple-400" />;
  };

  return (
    <section id="works" className="py-20 px-6 md:px-12 bg-slate-950">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <h2 className="text-3xl font-bold text-white mb-4">Featured Products</h2>
            <p className="text-slate-400 max-w-2xl">
              A selection of high-impact games and products I've managed from 0→1 to scale.
            </p>
          </div>
          <div className="hidden md:block h-px flex-1 bg-slate-800 ml-8 relative top-[-10px]"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURED_WORKS.map((work, idx) => (
            <div 
              key={idx}
              className="group relative bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden hover:border-slate-600 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-900/10 flex flex-col"
            >
              {/* Aspect Ratio 4/5 for Game Covers */}
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-slate-800">
                {work.image ? (
                  <>
                    <img 
                      src={work.image} 
                      alt={work.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-10 group-hover:opacity-0 transition-opacity"></div>
                  </>
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-slate-800">
                    {getIcon(work.category)}
                  </div>
                )}
                
                <div className="absolute top-4 right-4 bg-slate-900/80 backdrop-blur-sm p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 shadow-lg border border-slate-700">
                  <ArrowUpRight className="w-5 h-5 text-white" />
                </div>
              </div>

              <div className="p-6 flex flex-col flex-1 border-t border-slate-800">
                <div className="flex items-start justify-between mb-2">
                   <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                    {work.title}
                  </h3>
                </div>
                
                <div className="text-sm font-medium text-slate-500 mb-6 uppercase tracking-wider flex items-center gap-2">
                  {!work.image && React.cloneElement(getIcon(work.category) as any, { className: "w-4 h-4" })}
                  {work.category}
                </div>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {work.tags.map((tag, tIdx) => (
                    <span 
                      key={tIdx} 
                      className="px-2.5 py-1 text-xs font-medium rounded-full bg-slate-800 text-slate-300 border border-slate-700 group-hover:border-slate-600 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedWorks;